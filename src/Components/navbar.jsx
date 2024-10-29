import { Button, Modal, Navbar as BootstrapNavbar } from 'react-bootstrap';
import React, { useContext, useState } from 'react';
import { cartContext } from '../cartContext';
import CartProduct from './CartProduct';

const NavbarComponent = () => {
  const [show, setShow] = useState(false); // Set to false to hide modal initially
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true); // Fixed spelling of handleShow
  const cart = useContext(cartContext);

  const productsCount = cart.items.reduce((accumulator, curr) => accumulator + curr.quantity, 0);

  return (
    <>
      <BootstrapNavbar expand='sm'>
        <BootstrapNavbar.Brand href='/'>Ecommerce Store</BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle />
        <BootstrapNavbar.Collapse className='justify-content-end'>
          <Button onClick={handleShow}>Cart ({productsCount} Items)</Button> {/* Added parentheses around items count */}
        </BootstrapNavbar.Collapse>
      </BootstrapNavbar>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {productsCount > 0 ? (
            <>
              <p>Items in your Cart:</p> {/* Changed 'ur' to 'your' */}
              {cart.items.map((current, idx) => (
                <CartProduct id={current.id} quantity={current.quantity}/>
              ))}
              <h1>Total: ${cart.getTotalCost().toFixed(2)}</h1> {/* Fixed method name */}
              <Button variant='success'> {/* Changed to lowercase */}
                Purchase Items!
              </Button>
            </>
          ) : (
            <h1>There are no items in your Cart</h1>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default NavbarComponent;
