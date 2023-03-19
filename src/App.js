import "./App.css";

import ItemListConteiner from "./components/ItemListConteiner/ItemListConteiner";
import  {NavBar} from "./components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ItemDetailConteiner from "./components/ItemDetailContainer/ItemDetailContainer";



function App() {
  return (
    <div className="principal">
      <div>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element= {<ItemListConteiner />}/>
            <Route path="/productos/:categoriaId" element= {<ItemListConteiner />}/>
            <Route path="/detail/:itemId" element= {<ItemDetailConteiner />}/>
            <Route path="*" element={<Navigate to="/"/>}/>
          </Routes>
        </BrowserRouter> 
      </div>
    </div>
   );
}

export default App;