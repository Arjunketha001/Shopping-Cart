// App.js
import { useState } from 'preact/hooks';

import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './Components/navbar';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Store from './Pages/Store';
import Success from './Pages/Success';
import Cancel from './Pages/Cancel';
import CartProvider from './cartContext'

export function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CartProvider>
          <Container>
            <NavbarComponent />
          </Container>
          <BrowserRouter>
            <Routes>
              <Route index element={<Store/>}/>
              <Route path='success' element={<Success/>}/>
              <Route path='cancel' element={<Cancel/>}/>
            </Routes>
          </BrowserRouter>
      </CartProvider>
      
      
    </>
  );
}
