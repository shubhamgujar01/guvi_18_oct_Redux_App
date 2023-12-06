import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import Cart from './Cart';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/cart/:index' element={<Cart />} />
        </Routes>
      </BrowserRouter>
     
  );
}

export default App;
