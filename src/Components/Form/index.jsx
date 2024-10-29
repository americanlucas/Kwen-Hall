import Botao from "./Botao"
import CaixaTexto from "./CaixaTexto"
import "./style.css"

import { useState } from "react"

const Form = (props) => {

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoUsuarioCadastrado({
            nome,
            email, 
            phone
        })
    }

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    return (
        <>
        <form onSubmit={aoSalvar}  className="container-form">
            <h2>{props.titulo}</h2>
            <CaixaTexto 
                type="text"
                placeholder="Your Name."
                value={nome}
                aoAlterado={value => setNome(value)}
            />
            <CaixaTexto 
                type="email"
                placeholder="Your Best E-Mail."
                value={email}
                aoAlterado={value => setEmail(value)}
            />
            <CaixaTexto 
                type="tel"
                placeholder="Your Phone."
                value={phone}
                aoAlterado={value => setPhone(value)}
            />

            <Botao
                botao="Send."
            />
        </form>
            
        </>
    )
}

export default Form