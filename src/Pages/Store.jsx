import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { productsArray } from '../productStore.js'
import ProductCard from '../Components/ProductCard.jsx'

const Store = () => {
  return (
    <>
    <h1 align='center' className='p-3'>Welcome to the Store</h1>
    <Row xs={1} md={3} className='g-4'>
        {
            productsArray.map((product,idx)=>(
                <Col align='center' key={idx}>
                    <ProductCard product={product}/>
                    
                </Col>
            ))
        }
        

    </Row>
    </>
  )
}

export default Store