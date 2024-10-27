import React from "react";
import { useContext } from 'react';
import { CartContext } from '../contexts/cartContext';

const Cart = () => {
  const { cart, setCart, total } = useContext(CartContext);

  const decreaseQuantity = (id) => {
    const updatedCart = cart.map((pizza) => 
      pizza.id === id && pizza.quantity > 0 
        ? { ...pizza, quantity: pizza.quantity - 1 } 
        : pizza 
    );
    setCart(updatedCart);
  };

  const removePizzaFromCart = (id) => {
    const updatedCart = cart.map((pizza) => 
      pizza.id === id 
        ? { ...pizza, quantity: 0 } 
        : pizza 
    );
    setCart(updatedCart);
  };

  const pizzasInCart = cart.filter((pizza) => pizza.quantity > 0);

  if (pizzasInCart.length === 0) {
    return <p>El carrito está vacío</p>;
  }

  return (
    <div className="container">
      <div className="row">
        {pizzasInCart.map((pizza) => (
          <div key={pizza.id} className="col-md-4 mb-4">
            <div className="card mb-3">
              <img src={pizza.image} className="card-img-top" alt={pizza.name} />
              <div className="card-body">
                <h5 className="card-title">{pizza.name}</h5>
                <p>Precio: ${pizza.price.toLocaleString()}</p>
                <p>Cantidad en carrito: {pizza.quantity}</p>
                <div className="btn-container">
                  <button 
                    onClick={() => decreaseQuantity(pizza.id)} 
                    className="btn btn-danger" 
                  > 
                    Reducir 1 unidad 
                  </button>
                  <button 
                    onClick={() => removePizzaFromCart(pizza.id)} 
                    className="btn btn-danger" 
                  > 
                    Eliminar del carrito 
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="pagar-btn">
        <button className="btn btn-primary"> 💵 Pagar</button>
        <p>Total: ${total.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default Cart;
