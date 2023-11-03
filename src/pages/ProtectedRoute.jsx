import React from "react";
import { useAuth } from "../contexts/fakeAuthContext";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? children : <Navigate to="/" />;
}

export default ProtectedRoute;
