import React, {useState} from 'react'
import {Link} from 'react-router-dom';  

import { auth , googleProvider} from "../../config/firebase";
import { createUserWithEmailAndPassword,signInWithPopup, signOut } from "firebase/auth"; 

const Register = () => {
  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    console.log(auth?.currentUser?.email);
    const signIn = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (err){
            console.error(err);
        }
    };
    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth,googleProvider);
        } catch (err){
            console.error(err);
        }
    };
    const logOut = async () => {
        try {
            await signOut(auth);
        } catch (err){
            console.error(err);
        }
    };


  return (
    
    <div className='d-flex justify-content-end'>
        <div className='col-md-6 col-lg-4 col-12'>
            <div className='card shad'> 
            <div className='card-body py-5 px-4'>
            <h4 className='text-center'>REGISTER</h4>
            <form className='p-3'> 
              <div className='form-group my-3'>
                <label htmlFor='name'>Name</label>
                <input type='text' className='form-control inp-login' id='name' placeholder='Enter Full Name' />
              </div>
              <div className='form-group my-3'>
                <label htmlFor='email'>Email</label>
                <input type='email' className='form-control inp-login' onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email' />
              </div>
              <div className='form-group my-3'>
                <label htmlFor='password'>Password</label>
                <input type='password' className='form-control inp-login' onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password' />
              </div> 
              
              <div className='d-flex justify-content-between mt-3'> 
                <Link to={'/login'} className='btn btn-light'>Already registered? LOGIN</Link>

                <button type='submit' className='btn btn-theme btn-round '>REGISTER</button>
              </div>
              <small className="text-body-secondary">By clicking Sign up, you agree to the terms of use.</small>

              <hr />
                <button onClick={signInWithGoogle} className='btn btn-block customBtn'> <img src={process.env.PUBLIC_URL + '/img/google.png'} height="45px"/>  Sign in with Google</button> 
            </form>
          </div>
        </div>
      </div>
    </div> 
  )
}

export default Register