import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { pedrirProductosPorId } from "../helpers/pedirDatos"
import ItemDetail from "../ItemDetail/ItemDetail";
import {collection, getDocs, query, where} from "firebase/firestore"; 
import {db} from "../../firebase/config"; 
// import Swal from "sweetalert2"

// const warningAlert = (tittle, message) =>{
//     Swal.fire({
//         tittle: tittle, 
//         text: message, 
//         icon: "Warning"
//     })
// }

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

    const refProd = collection(db, "Productos"); 
    const refProdquery = itemId
    ? query(refProd, where("category", "==", itemId))
    : refProd

    getDocs (refProdquery)
    .then ((resp) =>{
        const docs = resp.docs.map((doc) =>{
            return{...doc.data(), id: doc.id}
        })
        setItem(docs)
    })
    // .catch((error) =>{
    //     warningAlert("Uups ocurrio un error!", error)
    // })
    .finally(() =>{
        setLoading(false)
    })

    return(
        <div>
            {
                loading ? <h2>Cargando..</h2> : <ItemDetail item={item}/>
            }
        </div>
    )
}
export default ItemDetailConteiner