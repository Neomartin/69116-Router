import { useParams } from "react-router-dom"

export default function ProductDetail() {

    const { id, order } = useParams()

    //Llamar a la base de datos y solicitarle el producto a través de su ID, y una vez que se recibe el producto pinto la vista de detalle producto con los datos de el producto encontrado


  return (
    <>
        <h1>ProductDetail</h1>
        { id }
    
    </>
  )
}
