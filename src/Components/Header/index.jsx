import "./style.css"
import { Link } from "react-router-dom"

const Header = (props) => {
    return (
        <>
        <header>
            <Link to="/">
                <h1>{props.titulo1}</h1>
            </Link>
            <Link to="/">
                <h1>{props.titulo2}</h1>
            </Link>
           
        </header>

        </>
    )
}

export default Header