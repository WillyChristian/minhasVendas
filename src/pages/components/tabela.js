import React from 'react'
import { makeStyles } from '@material-ui/core'

const styles = makeStyles((theme)=>({
  table:{
    fontFamily: "arial,sans-serif",
    borderCollapse: 'collapse',
    width: '85%',
    margin: '1.5rem 0rem',
    [theme.breakpoints.between('xs',"sm")]:{

    },
    [theme.breakpoints.between('sm',"md")]:{
 
    }
  },
  headAndBody:{
    border: "1px solid #dddddd",
    textAlign: "left",
    padding: "8px"
  }
}))


export default function Tabela({data}) {
  const tableStyle = styles()
  return (
    <>
       <table className={tableStyle.table}>
         <tr>
            <td className={tableStyle.headAndBody}>Marca do Aparelho</td>
            <td className={tableStyle.headAndBody}>Modelo do Aparelho</td>
            <td className={tableStyle.headAndBody}>Peça / Serviço executado</td>
            <td className={tableStyle.headAndBody}>Valor final (R$)</td>
         </tr>
            { 
              data?.map((element, indice) => {
                return(
                  <tr>      
                      <td key={(Math.random()*100) * indice} className={tableStyle.headAndBody} >{element.marca}</td>
                      <td key={(Math.random()*100) * indice} className={tableStyle.headAndBody} >{element.modelo}</td>            
                      <td key={(Math.random()*100) * indice} className={tableStyle.headAndBody} >{element.peça}</td>            
                      <td key={(Math.random()*100) * indice} className={tableStyle.headAndBody} >{element.preço}</td> 
                  </tr>
                )
              })
            }          
       </table>
    </>
  );
}
