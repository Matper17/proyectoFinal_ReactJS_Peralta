import "./App.css";

import  {NavBar} from "./components/NavBar/NavBar";
import ItemListConteiner from "./components/ItemListConteiner/ItemListConteiner";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import "bootstrap/dist/css/bootstrap.min.css"


function App() {
  return ( 
      <div>
        <NavBar />
        <ItemListConteiner greeting = "Bienvenidos/as a MP-Training Force" />
        <div>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="./imgs/dumbells.jfif" />
            <Card.Body>
              <Card.Title>Producto 1</Card.Title>
              <Card.Text>
                Mancuernas 10kg
              </Card.Text>
              <Button variant="primary">Añadir al carrito</Button>
            </Card.Body>
        </Card>
        </div>
      </div>
      
   );
}

export default App;