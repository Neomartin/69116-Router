import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <h1>TITULO DE HOME</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam quisquam beatae, necessitatibus accusamus ut nemo architecto nesciunt illo. Maxime repudiandae sit qui totam eligendi quo doloribus fuga debitis blanditiis atque?</p>
      
      <section>
        <div>
          <h6>PRoducto 1</h6>
          <p>Descripcion del producto 1</p>
          <Link to={`/product-detail/56asd56asd6assa65dsa65/ascendente`}>Detalle</Link>
        </div>

        <div>
          <h6>PRoducto 2</h6>
          <p>Descripcion del producto 2</p>
          <Link to={`/product-detail/78das87das98dsa89ds89/descendente`}>Detalle</Link>
        </div>

      </section>
    
    </>
  )
}
