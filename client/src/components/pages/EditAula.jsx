import { useParams } from "react-router-dom";
import FormAula from "../formAula/FormAula";
import Navbar from "../layout/Navbar"
import { useState } from "react";

function EditAula() {
  const {id} = useParams();

  async function editarAula(infoAula,id) {

    try {
      const resposta = await fetch(`http://localhost:5000/aulas/${id}`,{
        method : 'PUT',
        headers :{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(infoAula)
      });
      if (!resposta.ok) {
          const retorno = await resposta.json();
          console.log('Erro ao editar Aula',retorno)
      }
      else{
        console.log('Aula editada')
        //alert('Aula editada com sucesso')
      }

    } catch (error) {
        console.log('Erro ao editar aula', error)
    }
  }

  return (
    <div>
      <Navbar/>
      <FormAula 
      titulo='Editar Aula' 
      textoBotao='Salvar' 
      id={id} 
      handdleSubmit={editarAula}
      tipo ='editada' />
       
    </div>
        
        
  )
}

export default EditAula