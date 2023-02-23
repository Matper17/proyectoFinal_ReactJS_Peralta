import "./form.css"
import logo from "./logo.png"
export const Form = () => {

    return (
        <header className="header">
            <div className="titulo-contenedor">
                <img src= {logo} alt="Logo1" className="logo-pag"/>
                <nav className="nav-bar">
                    <a className="navbar-link" href="./components/sobremi.js"> Sobre mi </a>
                    <a className="navbar-link" href="./components/especialidad.js"> Especialidades </a>
                    <a className="navbar-link" href="./components/reserva.js"> Reserva tu turno </a>
                </nav>
            </div>
        </header>
    )
}

