import "./NavBar.css"
import { CartWidget } from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"



export const NavBar = () => {
    
    return (
    <header className="header">
        <div>
            <h1 className="tituloPrincipal">MP-Training Force</h1>
        </div>
        <div className="contenedor-principal">
            <nav className="navbar">

                <Link to="/" className="navbar_link"> Home </Link>
                <Link to="/productos/Mancuernas" className="navbar_link"> Mancuernas </Link>
                <Link to="/productos/Barras" className="navbar_link"> Barras </Link>
                <Link to="/productos/Kits" className="navbar_link"> Kits </Link>
                <Link to="/productos/Planes" className="navbar_link"> Planes </Link>
                <CartWidget />
            </nav>
        </div>
    </header>
    )
}