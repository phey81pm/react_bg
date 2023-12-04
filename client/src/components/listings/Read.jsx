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
    <div className='d-flex justify-content-between'> 
        <h4>EDIT USER</h4>
        <Link to='/' className='btn btn-primary'>Back</Link>
        <Link to='/create' className='btn btn-primary'>Add</Link>
       
        {data.map((user) => {
          return (
            <form onSubmit={handleSubmit}>
              <div className="form-group my-3">
                <label htmlFor="username">Username</label>
                <input
                  value={user.username}
                  type="text"
                  name="username"
                  required
                  onChange={(e) =>
                    setData([{ ...data[0], username: e.target.value }])
                  }
                />
              </div>
              <div className="form-group my-3">
                <label htmlFor="email">Email</label>
                <input
                  value={user.email}
                  type="email"
                  name="email"
                  required
                  onChange={(e) =>
                    setData([{ ...data[0], email: e.target.value }])
                  }
                />
              </div>
              <div className="form-group my-3">
                <label htmlFor="fullname">Full Name</label>
                <input
                  value={user.fullname}
                  type="text"
                  name="fullname"
                  required
                  onChange={(e) =>
                    setData([{ ...data[0], fullname: e.target.value }])
                  }
                />
              </div>
              <div className="form-group my-3">
                <label htmlFor="password">Password</label>
                <input
                  value={user.password}
                  type="password"
                  name="password"
                  required
                  onChange={(e) => setData([{ ...data[0], password: e.target.value }])}
                />
              </div>
              <div className="form-group my-3">
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
