import FormAula from "../formAula/FormAula";
import Navbar from "../layout/Navbar"
import { useState } from "react";

function CadastroAula() {

  async function cadastrarAula(infoAula) {
    try {
      const resposta = await fetch('http://localhost:5000/aulas', {
        method: 'POST',
        headers: { 'content-Type': 'application/json' },
        body: JSON.stringify(infoAula)
      });
      if (resposta.ok) {
        throw new Error('Erro ao buscar Aula')
      }
      else {
        console.log(JSON.stringify(resposta))
      }
    } catch (error) {
      console.error('Erro ao buscar aula', error)
    }
  }

  return (
    <div>
      <Navbar />
      <FormAula titulo='Cadastrar Aula' textoBotao='Cadastrar' handdleSubmit={cadastrarAula} />
    </div>


  )
}

export default CadastroAula