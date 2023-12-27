import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
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

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post(`/edit_user/${id}`, data[0])
      .then((res) => {
        navigate("/");
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="container"> 
        <div className="col-12 d-flex justify-content-between">
          <Link to='/' className='btn btn-primary'>Back</Link>
          <h4>EDIT USER</h4>
          <Link to='/create' className='btn btn-primary'>Add</Link> 
        </div>
        
          {data.map((user) => {
            return (
              <form onSubmit={handleSubmit}>
                <div className="col-12 row"> 
                    <div className="form-group my-3 row">
                      <label className="col-md-6 col-6" htmlFor="username">Username</label>
                      <div className="col-md-6 col-6">
                        <input className="form-control"
                          value={user.username}
                          type="text"
                          name="username"
                          required
                          onChange={(e) =>
                            setData([{ ...data[0], username: e.target.value }])
                          }
                        /> 
                      </div>
                    </div>
                    <div className="form-group my-3 row">
                      <label className="col-md-6 col-6" htmlFor="email">Email</label>
                      <div className="col-md-6 col-6">
                        <input className="form-control"
                          value={user.email}
                          type="email"
                          name="email"
                          required
                          onChange={(e) =>
                            setData([{ ...data[0], email: e.target.value }])
                          }
                        /> 
                      </div>
                    </div>
                    <div className="form-group my-3 row">
                      <label className="col-md-6 col-6" htmlFor="fullname">Full Name</label>
                      <div className="col-md-6 col-6">
                        <input className="form-control"
                          value={user.fullname}
                          type="text"
                          name="fullname"
                          required
                          onChange={(e) =>
                            setData([{ ...data[0], fullname: e.target.value }])
                          }
                        />
                      </div>
                    </div>
                    <div className="form-group my-3 row">
                      <label className="col-md-6 col-6" htmlFor="password">Password</label>
                      <div className="col-md-6 col-6">
                        <input className="form-control"
                          value={user.password}
                          type="password"
                          name="password"
                          required
                          onChange={(e) => setData([{ ...data[0], password: e.target.value }])}
                        />
                      </div>
                    </div>
                    
                  
                </div>
                <div className="col-12 d-flex justify-content-end">
                  <button type="submit" className="btn btn-success">
                    Save
                  </button>
                </div>
            
            </form>
            );
          })}
      
    </div>
  );
}

export default Edit;
