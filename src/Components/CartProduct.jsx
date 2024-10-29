import React, { useContext } from 'react'
import { cartContext } from '../cartContext'
import { getProductData } from '../productStore'
import { Button } from 'react-bootstrap'

const CartProduct = (props) => {
    const cart=useContext(cartContext)
    const id=props.id
    const quantity=props.quantity
    const productdata=getProductData(id)
  return (
    <div>
        <h3>{productdata.title}</h3>
        <p> {quantity} total</p>
        <p>${quantity*productdata.price.toFixed(2)}</p>
        <Button size='sm' onClick={()=> cart.deleteFromCart(id)}> Remove</Button>
        <hr />
    </div>
  )
}

export default CartProduct