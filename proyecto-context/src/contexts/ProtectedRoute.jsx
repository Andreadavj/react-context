// src/contexts/ProtectedRoute.js
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  // Si el usuario no está autenticado, redirige a la página de login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Si el usuario está autenticado, muestra los hijos (las rutas protegidas)
  return children;
};

export default ProtectedRoute;
