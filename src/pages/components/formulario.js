import React, {useState} from 'react'
import gray from '@material-ui/core/colors/grey'
import {
    Grid,
    TextField,
    makeStyles,
    Button
} from '@material-ui/core'


const formStyle = makeStyles({
    formClass: {
        margin: '2px',
        border: "1.2px solid",
        
    },
    btn:{
        margin: '15px 0px',
        color: gray[50]
    },
    field: {
        '&$selected': { border: `${gray[50]}`}
    },
    color: {}
})


export default function Formulario(){
    const style = formStyle()
    const [data, setData] = useState({
        marca: "",
        modelo: "",
        peca: ""
    })
    
    const Atualizar =(event) =>{
        const value = event.target.value
        const key = event.target.name
        setData( old => ({
            ...old,
            [key]:value
        }))
    }
    const Cadastrar = async () =>{
        try{        
            const body = JSON.stringify(data)
            const response = await fetch("/api/cadastro_pecas",{
                method: "POST",
                body
            })
            // const returnData = await response.json()
            // console.log(returnData)
        } catch(err){
            console.log(err.message)
        }
    }
    return(
        <>
            <form action="#" method="#">
                <fieldset>
                <legend>Serviço Executado</legend>
                <Grid container spacing={1} alignItems="center">
                    <Grid item>
                        <TextField id="marca" label="Marca do Aparelho" variant="outlined" color="primary" onChange={Atualizar} name="marca"/>
                    </Grid>
                    <Grid item>
                        <TextField id="modelo" label="Modelo do Aparelho" variant="outlined" color="primary" onChange={Atualizar} name="modelo"/>
                    </Grid>
                    <Grid item>
                        <TextField id="peca" label="Peça / Serviço" variant="outlined" color="primary" onChange={Atualizar} name="peca"/>
                    </Grid>
                </Grid>
                <Button 
                    variant="outlined" 
                    color="primary" 
                    className={style.btn}
                    onClick={Cadastrar}
                >
                    Cadastrar
                </Button>
                </fieldset>                
            </form>           
        </>
    )
}
