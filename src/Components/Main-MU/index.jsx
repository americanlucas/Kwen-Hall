import "./style.css"

import { Link } from "react-router-dom"

const Main = (props) => {

    return (
        <>
        <section className="section-main-MU">

            <div className="titulo-main">
                <h1>{props.titulo}</h1>
            </div>

            <div className="subtitulo-main">
                <h2>{props.subtitulo}</h2>
            </div>

            <div className="topicos-main">
                <Link to="/meet-us/artists">
                    <h3>{props.topico1}</h3>
                </Link>
                <Link>
                    <h3>{props.topico2}</h3>
                </Link>
                <Link>    
                    <h3>{props.topico3}</h3>
                </Link>
            </div>
        </section>
        
        
        </>
    )
}

export default Main