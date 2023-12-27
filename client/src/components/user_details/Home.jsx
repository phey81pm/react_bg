import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom';

function Home() {
  const [data, setData] = useState([])
    const [deleted, setDeleted] = useState(true)
    useEffect(()=>{
        if(deleted){
            setDeleted(false)
        axios.get('/users')
        .then((res)=>{
            setData(res.data)
        })
        .catch((err)=>console.log(err))
    }
    }, [deleted])

    function handleDelete(id){
        axios.delete(`/delete/${id}`)
        .then((res)=>{
            setDeleted(true)
        })
        .catch((err)=> console.log(err))
    }

  return (
    <div className='container-fluid my-4'> 
        <div className='d-flex justify-content-between'> 
          <h4>USERS LIST</h4>
          <Link to='/create' className='btn btn-primary'>Add</Link>
        </div>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>username</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((user)=>{
              return(
                <tr>
                  <td>{user.id}</td>
                  <td>{user.fullname}</td>
                  <td>{user.email}</td>
                  <td>{user.username}</td>
                  <td>{user.password}</td>
                  <td>
                    <Link to={`/read/${user.id}`} className='btn btn-light'>View</Link>
                    <Link to={`/edit/${user.id}`} className='btn btn-primary'>Edit</Link> 
                    <button onClick={()=>handleDelete(user.id)} className='btn mx-2 btn-danger'>Delete</button> 
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Home