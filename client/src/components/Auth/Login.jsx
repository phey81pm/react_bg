import React, {useState} from 'react'
import {Link} from 'react-router-dom';  

import { auth , googleProvider} from "../../config/firebase";
import { createUserWithEmailAndPassword,signInWithPopup, signOut } from "firebase/auth"; 

import { UserAuth } from '../../context/AuthContext';

const Login = () => {
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // console.log(auth?.currentUser?.email);
    // const signIn = async () => {
    //     try {
    //         await createUserWithEmailAndPassword(auth, email, password);
    //     } catch (err){
    //         console.error(err);
    //     }
    // };
    // const signInWithGoogle = async () => {
    //     try {
    //         await signInWithPopup(auth,googleProvider);
    //     } catch (err){
    //         console.error(err);
    //     }
    // };
    // const logOut = async () => {
    //     try {
    //         await signOut(auth);
    //     } catch (err){
    //         console.error(err);
    //     }
    // };

    

    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn();
        } catch (error) {
            console.log(error)
        }

    }


  return ( 
    <div className='d-flex justify-content-end'>
        <div className='col-md-6 col-lg-4 col-12'>
            <div className='card shad'> 
                <div className='card-body py-5 px-4'>
                    <h4 className='text-center'>LOG IN</h4>
                    <form className='p-3'> 
                    <div className='form-group'>
                        <label htmlFor='username'>Email</label>
                        <input type='username' className='form-control inp-login' onChange={(e) => setEmail(e.target.value)} placeholder='Enter Username or Email' />
                    </div>
                    <div className='form-group my-3'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' className='form-control inp-login' onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password' />
                    </div>
                    
                    <div className='d-flex justify-content-between mt-5'> 
                        <Link to={'/register'} className='btn btn-light'>Not yet registered?</Link>
        
                        <button onClick={signIn} className='btn btn-theme px-4 btn-round'>LOG IN</button>
                    </div>
                    </form>

                    <hr />
                    <button onClick={signInWithGoogle} className='btn customBtn'> <img src={process.env.PUBLIC_URL + '/img/google.png'} height="45px"/>  Sign Up with Google</button>  
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Login