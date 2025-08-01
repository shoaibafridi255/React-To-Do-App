import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { isLoggedin } = useContext(AuthContext);

  return isLoggedin ? children : <Navigate to="/" />;
};

export default PrivateRoutes;
