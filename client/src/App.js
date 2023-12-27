import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';

import View from './components/user_details/View';
import Create from './components/user_details/Create';
import Edit from './components/user_details/Edit';
import Read from './components/user_details/Read';

import Login from './components/Auth/Login';
import Logout from './components/Auth/Logout';
import Register from './components/Auth/Register';
import Navbar from './Navbar';
import Footer from './Footer';

import { GoogleOAuthProvider  } from '@react-oauth/google'; 
const clientID = "21072412527-addcofe4fdtgmqf7cvcc39tvu3hejc2r.apps.googleusercontent.com"; 

function App() {   
  return (   
    <GoogleOAuthProvider clientId={clientID}>
      <BrowserRouter>   
        <div className='row'>
            <div>
              <Navbar />
            </div>
            <div className="container-fluid py-5 px-4">
              <Routes>   
                <Route path="/login" element={<Login />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/register" element={<Register />} /> 
 
                <Route path="/users/" element={<View />} />

                <Route path="/users/create" element={<Create />} />
                <Route path="/users/edit/:id" element={<Edit />} />
                <Route path="/users/read/:id" element={<Read />} />  
              </Routes>
            </div>
            <div className='mt-auto'>
              <Footer />
            </div>
          </div>   
      </BrowserRouter>  
    </GoogleOAuthProvider>
  )
}

export default App