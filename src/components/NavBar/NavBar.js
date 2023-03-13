import "./NavBar.css"
import { CartWidget } from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"



export const NavBar = () => {
    
    return (
    <header className="header">
        <div><h1>MP-Training Force</h1></div>
        <div className="contenedor-principal">
            <nav className="navbar">
                <Link to="/">
                <img src="./imgs/logo2.png" alt="logo" className="logoHeader"/>
                </Link>

                <Link to="/Productos/Productos" className="navbar_link"> Productos </Link>
                <CartWidget />
            </nav>
        </div>
    </header>
    )
}