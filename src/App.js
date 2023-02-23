import { Form } from "./components/Form/Form";
import "./components/Form/Form.css";
import { Especialidad } from "./components/Especialidad/Especialidad";
import "bootstrap/dist/css/bootstrap.min.css"
// import { Especialidad } from "./components/Form/Especialidad"
// import { Reserva } from "./components/Form/Reserva"

function App() {
  return ( 
      <div>
        <Form />
        <Especialidad />
        <div>
          <button className="boton-principal"> Elegir especialidad </button>
        </div>
      </div>
      
   );
}

export default App;