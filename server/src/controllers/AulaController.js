import { createAula, readAulas, updateAula, deleteAula, showOneAula } from "../models/AulaModel.js";
import { hasProperty, isNullOrEmpty, verificaAula } from "../validations/AulaValidation.js";

export async function criarAula(req, res) {
    console.log('AulaController criarAula');
    const aula = req.body;

    //exibindo corpo da requesição
    console.log(aula);

    if (verificaAula(aula)) {
        res.status(400).json({ menssage: 'Todas as propriedades devem ser preenchidas' });
    }
    else {
        try {
            const [status, resposta] = await createAula(aula);
            res.status(status).json(resposta);
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
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

    if (verificaAula(aula) || isNullOrEmpty(id)) {
        res.status(400).json({ menssage: 'Todas as propriedades devem ser preenchidas' });
    }
    else {
        //Tentando atualizar aula
        try {
            const [status, resposta] = await updateAula(aula, id);
            res.status(status).json(resposta)
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    }

}


export async function excluirAula(req, res) {
    console.log('AulaController excluirAula');

    const { id } = req.params;

    if (verificaAula(aula)) {
        res.status(400).json({ menssage: 'O id deve ser informado' });
    }
    else {
        try {
            const [status, resposta] = await deleteAula(id);
            res.status(status).json(resposta);
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    }


}

export async function mostrarUmaAula(req, res) {
    console.log('AulaController mostrarUmaAula');

    const { id } = req.params;


    try {
        const [status, resposta] = await showOneAula(id);
        res.status(status).json(resposta);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}