import Item from "../Item/item"

const itemList = ({item}) => {
    return(
        <div>
            <h2>Productos</h2>
            <hr/>
            <div className="row my-8">
                {item.map((prod)=><Item key={prod.id} item={prod}/>)}
            </div>
        </div>
    )
}

export default itemList