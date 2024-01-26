import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { Outlet, useNavigate } from "react-router-dom";

export const RootLayout = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/register");
  }, []);
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};
