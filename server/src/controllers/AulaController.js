import { createAula, readAulas, updateAula, deleteAula } from "../models/AulaModel.js";

export async function criarAula(req, res) {
    console.log('AulaController criarAula');
    const aula = req.body;

    //exibindo corpo da requesição
    console.log(aula);

    try {
        const [status, resposta] = await createAula(aula);
        res.status(status).json(resposta);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }

}


export async function mostrarAulas(req, res) {
    console.log('AulaController mostrarAula');
    const aula = req.body;

    //Exibindo corpo da requisição
    console.log(aula);

    try {
        const [status, resposta] = await readAulas(aula);
        res.status(status).json(resposta);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

export async function atualizarAula(req, res) {
    //Ao ser chamado o criarAula controller virá no console
    console.log('AulaController atualizarAula');


    //Criando constante com a requisição
    const aula = req.body;
    const { id } = req.params;

    //Tentando atualizar aula
    try {
        const [status, resposta] = await updateAula(aula, id);
        res.status(status).json(resposta)
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }

}


export async function excluirAula(req, res) {
    console.log('AulaController excluirAula');

    const { id } = req.params;

    try {
        const [status, resposta] = await deleteAula(id);
        res.status(status).json(resposta);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}