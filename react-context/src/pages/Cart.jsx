// import React, { useContext } from "react";
// import { CartContext } from '../contexts/cartContext';

// const Cart = () => {
//   const { cart, setCart, total } = useContext(CartContext);

//   const removeFromCart = (id) => {
//     const updatedCart = cart.filter(item => item.id !== id);
//     setCart(updatedCart);
//   };

//   return (
//     <div className="container">
//       <h2>Carrito de Compras</h2>
//       <div>
//         {cart.length === 0 ? (
//           <p>No hay productos en el carrito.</p>
//         ) : (
//           cart.map((item) => (
//             <div key={item.id} className="cart-item">
//               <h5>{item.name}</h5>
//               <p>Cantidad: {item.quantity}</p>
//               <p>Precio: ${item.price.toLocaleString()}</p>
//               <button onClick={() => removeFromCart(item.id)} className="btn btn-danger">Eliminar</button>
//             </div>
//           ))
//         )}
//       </div>
//       <h3>Total: ${total.toLocaleString()}</h3>
//     </div>
//   );
// };

// export default Cart;
// src/pages/Cart.jsx
import React, { useContext } from 'react';
import { CartContext } from '../contexts/cartContext';

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);

  const increaseQuantity = (id) => {
    const updatedCart = cart.map((item) => 
      item.id === id && item.quantity < item.stock // Aumentar solo si hay stock
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    setCart(updatedCart);
  };

  const decreaseQuantity = (id) => {
    const updatedCart = cart.map((item) => 
      item.id === id && item.quantity > 0 // Disminuir solo si la cantidad es mayor que 0
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updatedCart);
  };

  const removeItem = (id) => {
    const updatedCart = cart.filter(item => item.id !== id); // Eliminar item del carrito
    setCart(updatedCart);
  };

  return (
    <div className="container">
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <ul className="list-group">
          {cart.map((item) => (
            <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <h5>{item.name}</h5>
                <p>Precio: ${item.price.toLocaleString()}</p>
                <p>Cantidad: {item.quantity}</p>
              </div>
              <div>
                <button onClick={() => decreaseQuantity(item.id)} className="btn btn-danger">-</button>
                <button onClick={() => increaseQuantity(item.id)} className="btn btn-success">+</button>
                <button onClick={() => removeItem(item.id)} className="btn btn-warning">Eliminar</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <h4>
        Total: ${cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toLocaleString()}
      </h4>
    </div>
  );
};

export default Cart;
