import React from 'react'
import useSWR from 'swr' 
import {Container, makeStyles, createMuiTheme, ThemeProvider} from '@material-ui/core'

// content
import Tabela from './components/tabela'
import Formulario from '../pages/components/formulario'
import Erro from './components/erro'

const theme = createMuiTheme({
  palette: {
    primary: {main:'#fafafa'}
  }
})

const styles = makeStyles((theme) =>({
    header:{
      height:'150px',
      padding: '0',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#424242',
      marginBottom: '1px',
      "& img":{
        [theme.breakpoints.between('xs', 'sm')]:{
          width: '90%',          
        }
      }    
    },
    content:{
      height: '85vh',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      background: 'linear-gradient(180deg, rgba(66,66,66,1) 0%, rgba(94,94,94,1) 35%, rgba(229,229,229,1) 100%)',
      [theme.breakpoints.up('xs')]:{
        flexDirection: 'column',
        padding:'1.3em 0.5em',
        overflow: 'hidden',
        height: '95vh',
        justifyContent: 'space-around'
      },
      [theme.breakpoints.between('md', 'xl')]:{
        flexDirection: 'row',
        padding: '2em'
      },
    }
}))

function Home() {
  const {data, error} = useSWR('/api/tabela_pecas')
  const containerStyle = styles()
  if(error) return <Container><Erro/></Container>
  if(!data) return <Container><h1>Carregando...</h1></Container>
  if (data){ 
  return (
    <>
      <ThemeProvider theme={theme} >
        <Container maxWidth={'xl'} classes={{root: containerStyle.header}}>
          <img className='logo' src='/Logo_ifixdigital.png' alt="logo_ifix"/>
        </Container>        
        <Container maxWidth={'xl'} classes={{root: containerStyle.content}} >
          <Formulario />
          <Tabela />            
          {/* <Tabela data={data}/>             */}
        </Container>   
      </ThemeProvider>     
    </>
  )}
}

export default Home
/* <Table data = {data}/> 
 <Button variant='outlined' onClick={()=> mutate}>Atualizar</Button> */