import "./style.css"

import { Link } from "react-router-dom"

const SideBar = (props) => {

    return (
        <>
            <section className="section-sideBar">
                <div className="subtopics">
                    <Link to="/meet-us/artists">
                        <h3>{props.artist}</h3>
                    </Link>
                    <Link>
                        <h3>{props.projects}</h3>
                    </Link>
                    <Link>
                        <h3>{props.contacts}</h3>
                    </Link>
                </div>
                
            </section>
        </>
    )
}

export default SideBar