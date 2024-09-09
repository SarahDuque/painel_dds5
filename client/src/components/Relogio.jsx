import { useEffect, useState } from "react";
// Declarando função relogio
function Relogio() {
    // Declarando hora como estado 
    const[hora,setHora]  = useState('');
    // Chamando função pós carregamento
    useEffect(()=>{
        // Chamando função de atualizar horário primeira vez
        atuahora();

        // Declarando intervalo de 1 segundo para atualizar relógio
        const inter = setInterval(atuahora,1000);
        return()=>{
            clearInterval(inter);
        }
    },[]);

    // Declarando função que atribui a hora minutos e segundos atuais
    function atuahora() {
        // Declarando objeto do tipo date
        const agora = new Date();
        // Pegando hora minutos e segundos
        const horaMinSeg = agora.toLocaleTimeString('pt-br',{hour: '2-digit',minute: '2-digit', second: '2-digit'});
        // Atualizando o estado hora para hora minutos e segundos atuais
        setHora(horaMinSeg);
    }

    return (
        // Retornando uma div com hora minutos e segundos de forma correta
        <div>{hora}</div>
    )
}
export default Relogio;