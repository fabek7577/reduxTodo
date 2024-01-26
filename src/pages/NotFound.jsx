import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="text-center">
        <h1 className="d-block text-center text-secondary">
          Page Not Found 404
        </h1>
        <button className="btn btn-success" onClick={() => navigate(-1)}>
          Go back
        </button>
      </div>
      <div className="d-flex justify-content-center">
        <img src="https://www.oxxy.in/404.gif" height={500} alt="" />
      </div>
    </>
  );
};

export default NotFound;
