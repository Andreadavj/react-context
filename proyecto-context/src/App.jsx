import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import pizzas from "./pages/pizzas";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import { CartProvider } from '../src/contexts/cartContext';
import "./App.css";
import { ProtectedRoute } from '../src/contexts/ProtectedRoute';

const App = () => {
  return (
    <CartProvider>
      <div>
        <Navbar />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </CartProvider>
  );
};

export default App;

