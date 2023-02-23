import "./Form.css"

export const Form = () => {

    return (
        <header className="header">
        <div className="titulo-contenedor">
            <h1 className="titulo-principal"> Turnero médico </h1>
            <nav className="nav-bar">
                <a className="navbar-link" href="./components/especialidad.js"> Especialidades </a>
                <a className="navbar-link" href="./components/reserva.js"> Reserva tu turno </a>
            </nav>
        </div>
    </header>
    )
}

