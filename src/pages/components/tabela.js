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

// const GenTable= ({item}) =>{
//   const tableStyle = styles()
//     return (
//       <tr>
//         <td className={tableStyle.headAndBody} >{item[0]}</td>
//         <td className={tableStyle.headAndBody} >{item[1]}</td>            
//         <td className={tableStyle.headAndBody} >{item[2]}</td>            
//         <td className={tableStyle.headAndBody} >{item[3]}</td>            
//         <td className={tableStyle.headAndBody} >{item[4]}</td>            
//       </tr>
//     )
// }

export default function Tabela({data}) {
  const tableStyle = styles()
  return (
    <>
     <Container>
       <table className={tableStyle.table}>
         <thead>
            <td className={tableStyle.headAndBody}>Marca do Aparelho</td>
            <td className={tableStyle.headAndBody}>Modelo do Aparelho</td>
            <td className={tableStyle.headAndBody}>Peça / Serviço executado</td>
            <td className={tableStyle.headAndBody}>Valor final (R$)</td>
         </thead>
            { 
              // data.map( (item, index) =>{ //data? filtra o conteúdo para que ele não execute caso haja undefined ou null
              //   <GenTable key={index} item={item} />
              // })
              data?.map(element => {
                return(
                  <tbody>      
                      <td className={tableStyle.headAndBody} >{element.marca}</td>
                      <td className={tableStyle.headAndBody} >{element.modelo}</td>            
                      <td className={tableStyle.headAndBody} >{element.peça}</td>            
                      <td className={tableStyle.headAndBody} >{element.preço}</td>            
         
                  </tbody>
                )
              })
            }          
       </table>
     </Container>
    </>
  );
}
