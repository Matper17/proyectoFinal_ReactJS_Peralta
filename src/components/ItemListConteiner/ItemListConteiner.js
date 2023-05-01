import "./ItemListConteiner.css"
import { useEffect, useState } from "react"
import { pedirDatos } from "../helpers/pedirDatos"
import ItemList from "../itemList/itemList" 
import { useParams } from "react-router-dom"
import {collection, getDocs, query, where} from "firebase/firestore"; 
import {db} from "../../firebase/config"; 


const ItemListConteiner = () => {
    const [prod, setProd] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoriaId} = useParams()
    //console.log(categoriaId)

    useEffect(() =>{
        setLoading(true)
        pedirDatos()
        .then ((response) =>{
            if(!categoriaId){
                setProd(response)
            }else{
                setProd(response.filter((prod) =>prod.categoria === categoriaId))
            }
        })
        .catch((error)=>{
            console.log(error) 
        })
        .finally(()=>{
            setLoading(false)
        })
        
    const refProd = collection(db, "Productos"); 
    const refProdquery = categoriaId
    ? query(refProd, where("category", "==", categoriaId))
    : refProd

    getDocs (refProdquery)
    .then ((resp) =>{
        const docs = resp.docs.map((doc) =>{
            return{...doc.data(), id: doc.id}
        })
        setLoading(docs)
    })

    .finally(() =>{
        setLoading(false)
    })
    }, [categoriaId])
    return(
        <div className="container">
            {
                loading ? <h2>Cargando..</h2> : <ItemList item={prod}/>
            }
        </div>
    )
}
export default ItemListConteiner

//Acá mostramos los productos!!!! 