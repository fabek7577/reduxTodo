import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Register = () => {
  const context = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    checkPass: "",
  });

  const [passChecked, setPassChecked] = useState(true);
  const [nameChecked, setNameChecked] = useState(true);
  const [emailChecked, setEmailChecked] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const regax = formData.email.trim().search(/@gmail\.com/g);
    console.log(regax);
    if (
      formData.password.trim() !== formData.checkPass ||
      formData.password.trim() == ""
    ) {
      setPassChecked(false);
      setTimeout(() => setPassChecked(true), 2000);
    }
    if (formData.username.trim() == "") {
      setNameChecked(false);
      setTimeout(() => setNameChecked(true), 2000);
    }
    if (formData.email.trim() == "" || regax < 0) {
      setEmailChecked(false);
      setTimeout(() => setEmailChecked(true), 2000);
    }
    if (
      formData.password.trim() == formData.checkPass &&
      formData.password.trim() !== "" &&
      formData.username.trim() !== "" &&
      formData.email.trim() !== "" &&
      regax > 0
    ) {
      context.setState({
        username: formData.username,
        password: formData.password,
      });
      navigate("/account");
    }
  };
  return (
    <div className="container col-4 px-5 py-3 card shadow">
      <h1 className="text-center">Register</h1>
      <form className="d-flex flex-column" onSubmit={handleSubmit}>
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
            {!nameChecked && (
              <span className="text-danger">Enter username</span>
            )}
          </div>
        </label>
        <label className="d-flex justify-content-between align-items-center mt-3">
          <span>Email</span>
          <div className="d-flex flex-column">
            <input
              type="text"
              value={formData.email}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
            />
            {!emailChecked && <span className="text-danger">Enter email</span>}
          </div>
        </label>
        <label className="d-flex justify-content-between align-items-center mt-3">
          <span>Password</span>
          <input
            type="password"
            value={formData.password}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, password: e.target.value }))
            }
          />
        </label>
        <label className="d-flex justify-content-between mt-3">
          <span>Confirm password</span>
          <div className="d-flex flex-column">
            <input
              type="password"
              value={formData.checkPass}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, checkPass: e.target.value }))
              }
            />
            {!passChecked && (
              <span className="text-danger">Password does not match</span>
            )}
          </div>
        </label>
        <div className="d-flex align-items-center mt-4 justify-content-center gap-3">
          <button className="btn btn-primary" onClick={handleSubmit}>
            Register
          </button>
          <Link to={"/login"} className="btn btn-link">
            Have an account?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
