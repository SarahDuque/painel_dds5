//Importando express
import express from 'express';
import cors from 'cors'

//Importando funções (metodos do controller)
import { mostrarAulas } from './controllers/AulaController.js';

//Chamando função express
const app = express();
const porta = 5000;

app.use(cors());

//Rota padrão para teste de API
app.get('/',(req,res)=>{
    res.send('<h1>Teste de API funcionando</h1>')   
});

//Rotas de aulas
app.get('/aulas',mostrarAulas);

//Iniciando API e exibindo mensagem no console com a porta
app.listen(porta,()=>{
    console.log(`API Rodando na porta ${porta}`)
});