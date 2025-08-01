import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Login from "./Auth/Login";
import { AuthContext } from "./Context/AuthContext";

const Index = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <Routes>
      <Route
        path="/"
        element={isLoggedIn ? <Navigate to="/home" /> : <Login />}
      />
      <Route
        path="/home"
        element={isLoggedIn ? <Home /> : <Navigate to="/" />}
      />
      <Route
        path="/about"
        element={isLoggedIn ? <About /> : <Navigate to="/" />}
      />
    </Routes>
  );
};

export default Index;
