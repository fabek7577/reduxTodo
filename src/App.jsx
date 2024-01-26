import React, { useContext, useEffect, useState } from "react";
import "./App.css";
// pages
import Home from "./pages/Home";
import Account from "./pages/private/Account";
// components
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import NotFound from "./pages/NotFound";
import { RootLayout } from "./layout/RootLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { AuthContext } from "./context/AuthContext";

export const PrivateRoute = ({ children }) => {
  const context = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    !context.state.username && navigate("/login");
  }, []);
  return context.state.username && children;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "account",
        element: (
          <PrivateRoute>
            <Account />
          </PrivateRoute>
        ),
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
