import { createContext, useState } from "react";
export const CartContext = createContext()
export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])


const añadirAlCarrito = (item) =>{
    setCart ([...cart, item])
}
const isInCart = (id) => {
    return cart.some ((prod) => prod.id === id)
}
const totalProductos = () =>{
    return cart.reduce ((acc, prod) => acc + prod.cantidad, 0)
}
const totalCompra = () =>{
    return cart.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
}
const vaciarCarrito = () =>{
    setCart ([])
}
const eliminarProductos = (id) =>{
    setCart(cart.filter((prod) => prod.id !== id))
}

return (
    <CartContext.Provider value={{
        cart, añadirAlCarrito, isInCart, totalProductos, totalCompra, vaciarCarrito, eliminarProductos
    }}>
        {children}
    </CartContext.Provider>
)
}