import React from 'react'
import {Container, makeStyles} from '@material-ui/core'

const errorStryle = makeStyles({
  cont_error: {
    display: 'flex',
    flexDirection: 'column',
    width: '100vw',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    
    "& h1, h4":{
      fontWeight: '300'
    }
  }
})
export default function Err(){
  const err = errorStryle()
    return(
          <Container classes={{root: err.cont_error}}>
            <h1>404 | Não encontrado </h1>
            <h4>Não foi possível carregar a página. Contate o desenvolvedor para maiores informações</h4>
          </Container>
    )
}