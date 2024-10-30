import Footer from "../../Components/Footer-MU"
import Header from "../../Components/Header"
import Main from "../../Components/Main-MU"
import SideBar from "../../Components/SideBar-MU"
import "./style.css"

const Artists = () => {
    return (
        <>
            <section className="section-meet-us">
                <div className="header">
                    <Header
                        titulo1="Kwen Hall."
                        titulo2="Meet Us."
                    />  
                </div>
                
                <div className="sidebar">
                    <SideBar
                        titulo="Menu."
                        artist="Artists."
                        projects="Projects."
                        contacts="Contacts."
                    />

                </div>
                
                <div className="main">
                    <Main />
                </div>

                <div className="footer">
                    <Footer
                        
                    />
                </div>
                
            </section>
        </>
    )
}

export default Artists