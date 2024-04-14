/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../../contextApi/AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";
import Loader from "../../components/Loader/Loader";

function PublicRoutes({ children }) {
  const { user, loader } = useContext(AuthContext);
  if (loader) {
    return <Loader />;
  }
  if (!user) {
    return children;
  }
  return <Navigate to="/"></Navigate>;
}

export default PublicRoutes;