import "./style.css"

import { Link } from "react-router-dom"

const Footer = (props) => {

    return (
        <>
        <div>
            <h3>Developed by <Link to="https://github.com/americanlucas" target="_blank">americanlucas.</Link></h3>
        </div>
        </>
    )
}

export default Footer