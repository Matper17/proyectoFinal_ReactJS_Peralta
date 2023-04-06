import {useContext} from "react";
import {CartContext} from "../../Context/CartContext";
import { Link } from "react-router-dom";
import './Cart.css'; 

const Cart = () => {
    const {cart, totalCompra, vaciarCarrito, eliminarProductos} = useContext(CartContext)

    if(cart.length === 0){
        return(
            <div className="container my-5">
                <h2>No hay productos en el carrito</h2>
                <hr/>
                <Link to="/" className="btn btn-primary">Añadir</Link>
            </div>
        )
    }
    return(
        <div className="container my-5">
            <h2>Carrito</h2>
            <h4 className="derecha">Precio</h4>
            <hr/>
            {
                cart.map((prod) =>(
                    <div key={prod.id} className="productoContenedor">
                        <img src={prod.img} width='100' alt={prod.nombre}/>
                        <div>
                            <h4>{prod.nombre}</h4>
                            <p>Precio: ${prod.precio}</p>
                            <p>Cantidad: {prod.cantidad}</p>
                            <button onClick={() => eliminarProductos(prod.id)} 
                                    className="btn btn-danger"    
                            >
                            </button>
                        </div>
                        <div className="derecha">
                            <p className="derecha2">Total: ${prod.precio * prod.cantidad}</p>
                        </div>
                        <hr/>
                    </div>
                ))
            }

            <h4 className="derecha">Total: ${totalCompra().toFixed(2)}</h4>
            <button onClick={vaciarCarrito} className="btn btn-danger m-3">Vaciar carrito</button>
            <Link className="btn btn-success" to="/checkout">Finalizar compra</Link>
        </div>
    )
}

export default Cart
