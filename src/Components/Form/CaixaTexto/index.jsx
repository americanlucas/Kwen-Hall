import "./style.css"

const CaixaTexto = (props) => {
    return (
        <>
            <input className="caixa-texto" type="text" placeholder={props.placeholder} />
        </>
    )
}

export default CaixaTexto