import Form from "../../Components/Form"
import Header from "../../Components/Header"
import "./style.css"

import { useState } from "react";

const Home = () => {
    const [usuarios, setUsuarios] = useState([])

    const aoNovoUsuarioAdicionado = (usuario) => {
        console.log(usuario)
        setUsuarios([...usuarios, usuario])
    }


    return (
        <>
        <Header
            titulo1="Kwen Hall."
            titulo2="Meet Us."
        />
        
        <Form titulo="Connect to us." aoUsuarioCadastrado = {usuario => aoNovoUsuarioAdicionado(usuario)}/>

            
        </>
    )
}

export default Home