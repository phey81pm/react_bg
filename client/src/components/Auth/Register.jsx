import React from 'react'
import {Link} from 'react-router-dom';

const Register = () => {
  return (
    
    <div className='d-flex justify-content-center align-items-center vh-100'>
        <div className='col-md-4 col-10'>
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
              
              <div className='d-flex justify-content-between mt-3'> 
                <Link to={`/login`} className='btn btn-light'>Already registered? LOGIN</Link>

                <button type='submit' className='btn btn-primary btn-round '>REGISTER</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div> 
  )
}

export default Register