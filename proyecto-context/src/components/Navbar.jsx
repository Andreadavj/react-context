// src/components/Navbar.jsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/cartContext';

const Navbar = () => {
  const { total } = useContext(CartContext);
  const token = true; // Simulación de autenticación

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Pizzería Mamma Mia!</Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav">
            <Link className="nav-link btn btn-outline-success me-2" to="/">Home 🍕</Link>
            {/* Links para usuario autenticado o no */}
            {token ? (
              <>
                <Link className="nav-link btn btn-outline-success me-2" to="/profile">Profile 👨‍💻</Link>
                <Link className="nav-link btn btn-outline-success me-2" to="/logout">Logout 🔐</Link>
              </>
            ) : (
              <>
                <Link className="nav-link btn btn-outline-success me-2" to="/login">Login 🚪</Link>
                <Link className="nav-link btn btn-outline-success me-2" to="/register">Register 🔐</Link>
              </>
            )}
          </div>
          <div className="navbar-nav ms-auto">
            <Link className="nav-link btn btn-outline-success" to="/cart">🛒 Total: ${total.toFixed(2)}</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
