import "./style.css"

const CaixaTexto = (props) => {
    const aoDigitar = (evento) => {
        props.aoAlterado(evento.target.value)
    }
    

    return (
        <>
            <input 
                className="caixa-texto" 
                type={props.type} 
                placeholder={props.placeholder} 
                onChange={aoDigitar}
                value={props.value}
            />
        </>
    )
}

export default CaixaTexto