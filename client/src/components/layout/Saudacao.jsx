import { useEffect, useState } from "react";
import styles from './Saudacao.module.css';
// Criando função saudacao
function Saudacao() {
    // Criando estado da saudacao
    const [saudacaoPeriodo, setSaudacaoPeriodo] = useState('');

    // Chamando função e definindo um intervalo de 1 segundo
    useEffect(() => {
        atuaSaudacao();
        const inter = setInterval(atuaSaudacao,1000);
        return()=>{
            clearInterval(inter);
        }
    }, []);
    // Criando texto da saudação do cabeçalho
    function atuaSaudacao() {

        // Declarando objeto do tipo Date
        const agora = new Date();

        // Obtendo hora em inteiro exemplo 07:35:00 retorna 7
        const hora = agora.getHours();

        // Obtendo dia da semana em inteiro iniciando em domingo que retorna 0 e sabado retorna 6
        const dia = agora.getDay();

        // Declarando variavel do texto da saudacao
        let texSaudacao = '';

        // Definindo array com os dias da semana
        const diaSemana = [
            'Domingo',
            'Segunda-Feira',
            'Teça-Feira',
            'Quarta-Feira',
            'Quinta-Feira',
            'Sexta-Feira',
            'Sabado'
        ];

        // Adicionando o dia da semana ao textSaudacao
        texSaudacao += diaSemana[dia];
        // Adicionando saudacao ao texSaudacao 

        if (hora >= 18){
            texSaudacao += ' Boa noite';
        }else if(hora>=12){
            texSaudacao += ' Boa tarde';
        }else{
            texSaudacao += ' Bom dia';
        }
        // Chamando função de atribuição
        setSaudacaoPeriodo(texSaudacao);
    }


    return (
        <div className={styles.saudacao}>{saudacaoPeriodo}</div>
    )
}
export default Saudacao;