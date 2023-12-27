import React, { useState } from 'react'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'

function Create() {
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        fullname: '',
    })

    const navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault()

        axios.post('/add_user', values)
        .then((res)=>{
            
            navigate('/')
            console.log(res)
        })
        .catch((err)=>console.log(err))
    }
  return (
    <div className='container vh-100 vw-100'>
        <div className='row'> 
            <div className='d-flex justify-content-between'>
                <h4>CREATE NEW USER</h4>
                <Link to='/users/' className='btn btn-outline-light'>View all users</Link> 
            </div>
            <form onSubmit={handleSubmit}>
                <div className='form-group my-2'>
                    <label htmlFor='username'>Username</label>
                    <input type='text' name='username' required onChange={(e)=> setValues({...values, username: e.target.value})} />
                </div>
                <div className='form-group my-2'>
                    <label htmlFor='email'>Email</label>
                    <input type='text' name='email' required onChange={(e)=> setValues({...values, email: e.target.value})} />
                </div>
                <div className='form-group my-2'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' name='password' required onChange={(e)=> setValues({...values, password: e.target.value})} />
                </div>
                <div className='form-group my-2'>
                    <label htmlFor='fullname'>Fullname</label>
                    <input type='text' name='fullname' required onChange={(e)=> setValues({...values, fullname: e.target.value})} />
                </div>
                <button type='submit' className='btn btn-dark'>SAVE</button>
            </form>
        </div>
    </div>
  )
}

export default Create