import React, { useContext } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { cartContext } from '../cartContext';

const ProductCard = (props) => {
    const product = props.product;
    const cart = useContext(cartContext);
    const productQuantity = cart.getProductQuantity(product.id);
    console.log(cart.items);
    console.log(productQuantity);
    
    
    return (
        <Card>
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
                {productQuantity > 0 ? (
                    <>
                        <Form as={Row} className="align-items-center">
                            <Form.Label column sm="6">In Cart: {productQuantity}</Form.Label>
                            <Col sm="6" className="d-flex justify-content-end">
                                <Button className="mx-2" onClick={() => cart.addOnetoCart(product.id)}>+</Button>
                                <Button className="mx-2" onClick={() => cart.removeOneFromCart(product.id)}>-</Button>
                            </Col>

                        </Form>
                        <Button variant='danger' className='my-2' onClick={()=> cart.deleteFromCart(product.id)}>Remove From Cart</Button>
                    </>
                ) : (
                    <Button variant="primary" onClick={() => cart.addOnetoCart(product.id)}>Add to cart</Button>
                )}
            </Card.Body>
        </Card>
    );
}

export default ProductCard;
