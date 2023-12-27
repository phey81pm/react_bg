import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Home from './components/user_details/Home';
import Create from './components/user_details/Create';
import Edit from './components/user_details/Edit';
import Read from './components/user_details/Read';

import Login from './components/Auth/Login';
import Register from './components/Auth/Register';

function App() {
  return ( 
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
 
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/read/:id" element={<Read />} />
        
          
        </Routes>
      </BrowserRouter> 
  )
}

export default App