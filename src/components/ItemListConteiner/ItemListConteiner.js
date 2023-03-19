import "./ItemListConteiner.css"
import { useEffect, useState } from "react"
import { pedirDatos } from "../helpers/pedirDatos"
import ItemList from "../itemList/itemList" 
import { useParams } from "react-router-dom"



const ItemListConteiner = () => {
    const [prod, setProd] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoriaId} = useParams()
    console.log(categoriaId)

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