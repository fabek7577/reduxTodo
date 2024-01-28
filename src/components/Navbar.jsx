import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const context = useContext(AuthContext);
  return (
    <nav className="bg-secondary py-3 text-light mb-4">
      <div className="container d-flex justify-content-between">
        <h3>
          <NavLink to="/">Logo</NavLink>
        </h3>
        <div className="d-flex gap-2">
          {context.state.logined && (
            <NavLink to="/account" className="btn btn-dark">
              Account
            </NavLink>
          )}
          {!context.state.logined ? (
            <NavLink to="/login" className="btn btn-dark">
              Login
            </NavLink>
          ) : (
            <Link
              to={"/"}
              className="btn btn-dark"
              onClick={() => {
                context.setState({ ...context.state, logined: false });
              }}
            >
              LogOut
            </Link>
          )}
          <NavLink to="/register" className="btn btn-dark">
            Register
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
