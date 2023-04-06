import ItemListConteiner from "../components/ItemListConteiner/ItemListConteiner";
import { NavBar } from "../components/NavBar/NavBar";
import ItemDetailConteiner from "../components/ItemDetailContainer/ItemDetailContainer";
import Cart from "../components/Cart";
import {Routes, Route, Navigate} from 'react-router-dom';
import Checkout from "../components/Checkout/Checkout;"

const PrivateRoute = () =>{
    return(
      <>
        <NavBar/>
        {/* Rutas privadas */}
        <Routes>
            <Route path="/" element= {<ItemListConteiner />} />
            <Route path="/productos/:categoriaId" element= {<ItemListConteiner />} />
            <Route path="/detail/:itemId" element= {<ItemDetailConteiner />} />
            <Route path="/cart" element= {<Cart />} />
            <Route path="/checkout" element= {<Checkout />} />
            <Route path="*" element= {<Navigate to="/" />} />
        </Routes>
      </>
    )
}

export default PrivateRoute 