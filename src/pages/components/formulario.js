import React, {useState} from 'react'
import gray from '@material-ui/core/colors/grey'
import {
    Grid,
    TextField,
    makeStyles,
    Button
} from '@material-ui/core'


const style = makeStyles(theme =>({
    form: {
        color: "#fff",
        padding: '1.5em',
        [theme.breakpoints.up('md')]:{
            margin: '1em'
        }
    },
    btn:{
        margin: '15px 0px',
        color: gray[50]
    },
    grid:{
       display: 'flex',
       alignItems: 'center' 
    }
}))


export default function Formulario(){
    const formStyle = style()
    const [data, setData] = useState({
        marca: "",
        modelo: "",
        peca: "",
        preço: ""
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
            await fetch("/api/cadastro_pecas",{
                method: "POST",
                body
            })
        } catch(err){
            console.log(err.message)
        }
    }
    return(
        <>
            <form className={formStyle.form}>
                <fieldset>
                <legend>Serviço Executado</legend>
                <Grid item classes={{root: formStyle.grid}} container spacing={1}>
                    <Grid >
                        <TextField
                            id="marca" 
                            label="Marca do Aparelho" 
                            variant="outlined" 
                            onChange={Atualizar} 
                            name="marca"
                        />
                    </Grid>
                    <Grid item>
                        <TextField 
                            id="modelo" 
                            label="Modelo" 
                            variant="outlined" 
                            color="primary" 
                            onChange={Atualizar} 
                            name="modelo"
                        />
                    </Grid>
                    <Grid item>
                        <TextField 
                            id="peca" 
                            label="Serviço efetuado" 
                            variant="outlined" 
                            color="primary" 
                            onChange={Atualizar} 
                            name="peca"
                        />
                    </Grid>
                    <Grid item>
                        <TextField 
                            id="preço"
                            label="Valor final" 
                            variant="outlined" 
                            color="primary"
                            onChange={Atualizar} 
                            name="preço"
                        />
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
