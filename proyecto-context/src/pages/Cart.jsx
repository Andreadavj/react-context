import React, { useContext } from "react";
import { CartContext } from '../contexts/cartContext';

const Cart = () => {
  const { cart, setCart, total } = useContext(CartContext);

  const removeFromCart = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
  };

  return (
    <div className="container">
      <h2>Carrito de Compras</h2>
      <div>
        {cart.length === 0 ? (
          <p>No hay productos en el carrito.</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="cart-item">
              <h5>{item.name}</h5>
              <p>Cantidad: {item.quantity}</p>
              <p>Precio: ${item.price.toLocaleString()}</p>
              <button onClick={() => removeFromCart(item.id)} className="btn btn-danger">Eliminar</button>
            </div>
          ))
        )}
      </div>
      <h3>Total: ${total.toLocaleString()}</h3>
    </div>
  );
};

export default Cart;
