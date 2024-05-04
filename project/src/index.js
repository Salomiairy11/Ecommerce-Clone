import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NewAcc from './HomePage/Navbar/NewAcc.js'
import SignIn from "./HomePage/Navbar/SignIn.js"
import ProtectedRoute from './HomePage/Navbar/ProtectedRoute.js'
import App from './App.js'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/SignIn" element={<SignIn />}></Route>
      <Route path="/NewAcc" element={<NewAcc />}></Route>
      <Route path="/" element={<ProtectedRoute />}>
        <Route path="/" element= {<App />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
)

