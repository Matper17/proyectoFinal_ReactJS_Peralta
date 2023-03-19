import { Link } from "react-router-dom";
import './item.css'

const Item = ({item}) =>{
    return(
        <div className="col-3 m-1">
        <h2>{item.nombre}</h2>
        <img src={item.img} width="70" className="prodImg" alt={item.nombre}/>
        <p>Precio: <strong>${item.precio}</strong></p>
        <Link to={`/detail/${item.id}`} className="btn btn-primary">Más info</Link>
    </div>
    )
}

export default Item