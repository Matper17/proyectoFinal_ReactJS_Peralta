import MOCK_DATA from "../Data/MOCK_DATA.json" //assert {type: 'json'}
import {db} from './config.js'
import {addDoc, collection} from 'firebase/firestore'

const data = MOCK_DATA.map((item) =>{
    delete item.id
    return item
})

const productos = collection(db, 'productos')
data.forEach((item) =>{
    addDoc(productos, item)
})