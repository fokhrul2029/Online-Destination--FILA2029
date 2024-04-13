/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../../contextApi/AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";

function PublicRoutes({ children }) {
  const { user } = useContext(AuthContext);
  if (!user) {
    return children;
  }
  return <Navigate to="/"></Navigate>;
}

export default PublicRoutes;
