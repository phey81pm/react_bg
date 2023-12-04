import React from 'react'
import {Link} from 'react-router-dom';

const Login = () => {
  return ( 
    <div className='d-flex justify-content-center align-items-center vh-100'>
        <div className='col-md-4 col-10'>
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
                    <Link to={`/register`} className='btn btn-light'>Not yet registered?</Link>
    
                    <button type='submit' className='btn btn-primary px-4 btn-round'>LOG IN</button>
                </div>
                </form>
            </div>
            </div>
        </div>
    </div>
    
  )
}

export default Login