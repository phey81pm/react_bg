import React from 'react'
import {Link} from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';  

const Login = () => {
  return ( 
    <div className='d-flex justify-content-end'>
        <div className='col-md-6 col-lg-4 col-12'>
            <div className='card shad'> 
                <div className='card-body py-5 px-4'>
                    <h4 className='text-center'>LOG IN</h4>
                    <form className='p-3'> 
                    <div className='form-group'>
                        <label htmlFor='username'>Username/Email</label>
                        <input type='username' className='form-control inp-login' id='username' placeholder='Enter Username or Email' />
                    </div>
                    <div className='form-group my-3'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' className='form-control inp-login' id='password' placeholder='Enter Password' />
                    </div>
                    
                    <div className='d-flex justify-content-between mt-5'> 
                        <Link to={'/register'} className='btn btn-light'>Not yet registered?</Link>
        
                        <button type='submit' className='btn btn-theme px-4 btn-round'>LOG IN</button>
                    </div>
                    </form>

                    <hr />
 
                    <GoogleLogin
                        onSuccess={credentialResponse => { console.log(credentialResponse)}}
                        onError={() => { console.log('Login Failed')}}
                        useOneTap
                    />
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Login