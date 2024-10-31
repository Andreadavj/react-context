import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext"; // Asegúrate de que la ruta es correcta

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth(); // Accede al estado de autenticación

  if (!user) {
    return <Navigate to="/login" replace />; // Redirige si no hay usuario
  }

  return children; // Si hay usuario, muestra los hijos
};

export default ProtectedRoute;
