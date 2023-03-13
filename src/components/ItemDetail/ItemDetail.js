import { useNavigate } from "react-router-dom";
const ItemDetail = ({item}) =>{
    const navigate = useNavigate()
    const handleVolver = () =>{
        navigate(-1)
    }
    return(
        <div className="container my-5">
            <h2>{item.nombre}</h2>
            <img src={item.img} alt={item.nombre}/>
            <p>{item.desc}</p>
            <p>Precio: ${item.precio}</p>
            <button onClick={handleVolver} className="btn btn-primary">Volver</button>
        </div>
    )
}
export default ItemDetail 