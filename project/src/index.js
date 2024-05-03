import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from "./HomePage/Navbar/Nav.js"
import Products from './HomePage/Products/Products.js'
import NewAcc from './HomePage/Navbar/NewAcc.js'
import SignIn from "./HomePage/Navbar/SignIn.js"
import ProtectedRoute from './HomePage/Navbar/ProtectedRoute.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/SignIn" element={<SignIn />}></Route>
      <Route path="/NewAcc" element={<NewAcc />}></Route>
      <Route path="/" element={<ProtectedRoute />}>
        <Route path="/" element={[<Nav /> ,<Products />]}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
)

