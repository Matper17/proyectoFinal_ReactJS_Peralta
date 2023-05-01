import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { pedrirProductosPorId } from "../helpers/pedirDatos"
import ItemDetail from "../ItemDetail/ItemDetail";



const ItemDetailConteiner = () =>{
    const [item, setItem] = useState([])
    const [loading, setLoading] = useState (true)
    const {itemId} = useParams()

    useEffect(()=>{
        setLoading (true)
        pedrirProductosPorId(Number(itemId))
            .then((resp) =>{
                setItem(resp)
            })
            .finally(() =>{
                setLoading(false)
            })
    }, [itemId])
    return(
        <div>
            {
                loading ? <h2>Cargando..</h2> : <ItemDetail item={item}/>
            }
        </div>
    )
}
export default ItemDetailConteiner