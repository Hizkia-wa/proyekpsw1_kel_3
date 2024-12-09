import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../components/AuthContext";

function ProtectedRoute({ children }) {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;
