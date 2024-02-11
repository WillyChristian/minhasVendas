import React from 'react'
import useSWR from 'swr' 
import {Container, makeStyles} from '@material-ui/core'

// components
import Tabela from './components/tabela'
import Formulario from '../pages/components/formulario'
import Erro from './components/erro'
import LoadPage from './components/load_page'



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
      background: 'linear-gradient(180deg, rgba(66,66,66,1) 0%, rgba(94,94,94,1) 35%, rgba(229,229,229,1) 100%)',
      [theme.breakpoints.between('xs','sm')]:{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems:'center',
        padding: "1rem 0.5rem",
      },
      [theme.breakpoints.between('sm', 'md')]:{
        display: 'flex',
        flexDirection: 'column',
        width: "100%",
        height: '100vh',
      },
      [theme.breakpoints.between('md','xl')]:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: '100vh',
      },
    }
}))

function Home() {
  const {data, error} = useSWR('/api/tabela_pecas')
  const containerStyle = styles()
  if(error) return <Container><Erro/></Container>
  if(!data) return <LoadPage/>
  if (data){ 
  return (
    <>      
        <Container maxWidth={'xl'} classes={{root: containerStyle.header}}>
          <img className='logo' src='/Logo_ifixdigital.png' alt="logo_ifix"/>
        </Container>        
        <Container maxWidth={'xl'} classes={{root: containerStyle.content}} >
          <Formulario />          
          <Tabela data={data}/>          
        </Container>            
    </>
  )}
}

export default Home
/* <Table data = {data}/> 
 <Button variant='outlined' onClick={()=> mutate}>Atualizar</Button> */