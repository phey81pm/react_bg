import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function Edit() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`/get_user/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

 
  return (
    <div className="container"> 
        <div className="col-12 d-flex justify-content-between">
          <Link to='/users/' className='btn btn-light'>Back</Link>
          <h4>USER DETAILS</h4>
          <Link to='/users/create' className='btn btn-light'>Add</Link> 
        </div>
        
          {data.map((user) => {
            return ( 
                <div className="col-12 row"> 
                    <div className="form-group my-3 row">
                      <label className="col-md-3 col-6" htmlFor="username">Username</label>
                      <div className="col">{user.username}</div>
                    </div>
                    <div className="form-group my-3 row">
                      <label className="col-md-3 col-6" htmlFor="email">Email</label>
                      <div className="col">{user.email}</div>
                    </div>
                    <div className="form-group my-3 row">
                      <label className="col-md-3 col-6" htmlFor="fullname">Full Name</label>
                      <div className="col">{user.fullname}</div>
                    </div>  
                </div>
                 
            );
          })}
      
    </div>
  );
}

export default Edit;
