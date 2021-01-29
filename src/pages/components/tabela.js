import React from 'react'
import { Container, makeStyles } from '@material-ui/core'

const styles = makeStyles({
  table:{
    fontFamily: "arial, sans-serif",
    borderCollapse: 'collapse',
    width: '100%'
  },
  headAndBody:{
    border: "1px solid #dddddd",
    textAlign: "left",
    padding: "8px"
  },

})

// const genTable = data =>{  
//     return (

//     )
// }

export default function Tabela({data}) {
  const tableStyle = styles()
  return (
    <>
     <Container>
       <table className={tableStyle.table}>
         <thead>
            <th className={tableStyle.headAndBody}>Marca do Aparelho</th>
            <th className={tableStyle.headAndBody}>Modelo do Aparelho</th>
            <th className={tableStyle.headAndBody}>Peça / Serviço executado</th>
            <th className={tableStyle.headAndBody}>Valor final (R$)</th>
         </thead>
         <tbody>    
            <tr>
              <td className={tableStyle.headAndBody} >{data[0]}</td>
              <td className={tableStyle.headAndBody} >{data[1]}</td>            
              <td className={tableStyle.headAndBody} >{data[2]}</td>            
              <td className={tableStyle.headAndBody} >{data[3]}</td>            
              <td className={tableStyle.headAndBody} >{data[4]}</td>            
            </tr>         
            <tr>
              <td className={tableStyle.headAndBody} >{data[1]}</td>
              <td className={tableStyle.headAndBody} >{data[1]}</td>            
              <td className={tableStyle.headAndBody} >{data[1]}</td>            
              <td className={tableStyle.headAndBody} >{data[1]}</td>            
              <td className={tableStyle.headAndBody} >{data[1]}</td>            
            </tr>         
         </tbody>
       </table>
     </Container>
    </>
  );
}
