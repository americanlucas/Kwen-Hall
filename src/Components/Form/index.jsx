import Botao from "./Botao"
import CaixaTexto from "./CaixaTexto"
import "./style.css"

const Form = (props) => {
    return (
        <>
        <div className="container-form">
            <h2>{props.titulo}</h2>
            <CaixaTexto placeholder="Your Name."/>
            <CaixaTexto placeholder="Your Best E-Mail."/>
            <CaixaTexto placeholder="Your Phone."/>
            <Botao botao="Send."/>
        </div>
            
        </>
    )
}

export default Form