import "./NavBar.css"
import { CartWidget } from "../CartWidget/CartWidget"



export const NavBar = () => {
    
    return (
    <header className="header">
        <div className="contenedor-principal">
            <nav className="navbar">
                <img src="./imgs/logo2.png" alt="logo" className="logoHeader"/>
                <a href="./Productos.js" className="navBar"> Productos </a>
                <CartWidget />
            </nav>
        </div>
    </header>
    )
}