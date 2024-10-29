import { useState } from "react";
import "./style.css"

const Botao = (props) => {
    const [clicado, setClicado] = useState(false); // Estado para verificar se foi clicado

    function aoClicar() {
        document.getElementById('btn').style.backgroundColor = "green";
        setClicado(true); // Define o estado como clicado
    }

    function desclicar() {
        document.getElementById('btn').style.backgroundColor = "#2A483C";
        setClicado(false); // Define o estado como não clicado
    }

    function handleClick() {
        if (clicado) {
        desclicar();
        } else {
        aoClicar();
        }
    }

    return (
        <>
            <button onClick={handleClick} id="btn" className="botao">{props.botao}</button>
        </>
    )
}

export default Botao