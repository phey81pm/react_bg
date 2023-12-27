import React from 'react'
import {Link} from 'react-router-dom'; 

import {GoogleLogin } from '@react-oauth/google';

const Register = () => {
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
                <input type='email' className='form-control inp-login' id='email' placeholder='Enter Email' />
              </div>
              <div className='form-group my-3'>
                <label htmlFor='password'>Password</label>
                <input type='password' className='form-control inp-login' id='password' placeholder='Enter Password' />
              </div>
              <div className='form-group my-3'>
                <label htmlFor='confirm_password'>Password</label>
                <input type='password' className='form-control inp-login' id='confirm_password' placeholder='Confirm Password' />
              </div>
              
              <div className='d-flex justify-content-between mt-3'> 
                <Link to={'/login'} className='btn btn-light'>Already registered? LOGIN</Link>

                <button type='submit' className='btn btn-theme btn-round '>REGISTER</button>
              </div>
              <small className="text-body-secondary">By clicking Sign up, you agree to the terms of use.</small>

              <hr className="my-4" />
              <h2 className="fs-5 fw-bold mb-3">Or use a third-party</h2> 

                  
              <GoogleLogin
                  onSuccess={credentialResponse => { console.log(credentialResponse)}}
                  onError={() => { console.log('Login Failed')}}
                  useOneTap
              />

            </form>
          </div>
        </div>
      </div>
    </div> 
  )
}

export default Register