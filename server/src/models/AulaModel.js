import mysql from 'mysql2/promise'
import db from '../conexao.js';

export async function readAulas(aula) {
    const conexao = mysql.createPool(db);

    //Ao ser acionado o metodo createAula retorna na tela
    console.log('Entrando no Model Aula');

    //Criando aula
    const sql = `SELECT * FROM aulas`;

    //Definindo parametros para inserir no sql
    const params = [
        aula.data,
        aula.data_hora_inicio,
        aula.data_hora_fim,
        aula.turma,
        aula.instrutor,
        aula.unidade_curricular,
        aula.ambiente
    ];

    //Executando query no banco
    try {
        const [retorno] = await conexao.query(sql, params);
        console.log('Aula exibida');
        return [200, retorno];
    } catch (error) {
        console.log(error);
        return [502, error];
    }

}


export async function createAula(aula) {
    const conexao = mysql.createPool(db);
    console.log('Entrando no Model Aula');

    const sql = `INSERT INTO aulas 
    (data,
    data_hora_inicio,
    data_hora_fim,
    turma,
    instrutor,
    unidade_curricular,
    ambiente)
    VALUES (?,?,?,?,?,?,?)`;

    const params = [
    aula.data,
    aula.data_hora_inicio,
    aula.data_hora_fim,
    aula.turma,
    aula.instrutor,
    aula.unidade_curricular,
    aula.ambiente
    ];
    try {
        const  [retorno] = await conexao.query(sql,params);
        console.log('Aulas cadastrada');
        return[201, retorno];
    } catch (error) {
        console.log(error);
        return[500,error]
;    }
}