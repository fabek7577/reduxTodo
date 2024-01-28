import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const context = useContext(AuthContext);
  const navigate = useNavigate();

  const [passChecked, setPassChecked] = useState(false);
  const [nameChecked, setNameChecked] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password.trim() == "") {
      setPassChecked("Enter password");
      setTimeout(() => setPassChecked(false), 2000);
    } else if (formData.password !== context.state.password) {
      setPassChecked("Password does dont match");
      setTimeout(() => setPassChecked(false), 2000);
    }

    if (formData.username.trim() == "") {
      setNameChecked("Enter username");
      setTimeout(() => setNameChecked(false), 2000);
    } else if (formData.username !== context.state.username) {
      setNameChecked("Username does dont match");
      setTimeout(() => setNameChecked(false), 2000);
    }

    if (formData.password.trim() !== "" && formData.username.trim() !== "") {
      if (
        context.state.username == formData.username &&
        context.state.password == formData.password
      ) {
        context.setState({
          username: formData.username,
          password: formData.password,
          logined: true,
        });
        navigate("/account");
      }
    }
  };
  return (
    <div className="container col-4 px-5 py-3 card shadow">
      <h1 className="text-center">Login</h1>
      <form className="d-flex flex-column px-3" onSubmit={handleSubmit}>
        <label className="d-flex justify-content-between align-items-center mt-3">
          <span>Username</span>
          <div className="d-flex flex-column">
            <input
              type="text"
              value={formData.username}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, username: e.target.value }))
              }
            />
            {nameChecked && <span className="text-danger">{nameChecked}</span>}
          </div>
        </label>
        <label className="d-flex justify-content-between align-items-center mt-3">
          <span>Password</span>
          <div className="d-flex flex-column">
            <input
              type="password"
              value={formData.password}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, password: e.target.value }))
              }
            />
            {passChecked && <span className="text-danger">{passChecked}</span>}
          </div>
        </label>
        <div className="d-flex align-items-center mt-4 justify-content-center gap-3">
          <button className="btn btn-primary">Login</button>
          <Link to={"/register"} className="btn btn-link">
            Register?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
