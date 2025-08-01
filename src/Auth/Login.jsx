import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const Login = () => {
  const { login } = useContext(AuthContext);

  // const userInfo = {
  //   username: "MuhammadShoaib",
  //   email: "shoaibafridi150@gmail.com",
  //   password: "112233",
  // };
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handelChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    if (
      // userData.username === userInfo.username &&
      // userData.email === userInfo.email &&
      // userData.password === userInfo.password
      userData.username &&
      userData.email &&
      userData.password
    ) {
      setTimeout(() => {
        login(userData);
        navigate("/home");
      }, 2000);
    } else return alert("Please fill Correctlly!");
    setUserData({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card shadow">
            <div className="card-body">
              <h3 className="text-center mb-4">Login</h3>
              <form onSubmit={handelSubmit}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={userData.username}
                    className="form-control"
                    placeholder="Enter username"
                    onChange={handelChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={userData.email}
                    className="form-control"
                    placeholder="Enter email"
                    onChange={handelChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={userData.password}
                    className="form-control"
                    placeholder="Enter password"
                    onChange={handelChange}
                  />
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
