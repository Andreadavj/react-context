import React, { useContext } from "react";
import { CartContext } from '../contexts/cartContext';
import pizzas from "../pages/pizzas"; // Asegúrate de que la ruta es correcta
import CardPizza from "../components/CardPizza";

const Home = () => {
  const { cart, setCart } = useContext(CartContext);

  const addToCart = (pizza) => {
    const existingPizza = cart.find(item => item.id === pizza.id);
    if (existingPizza) {
      const updatedCart = cart.map(item => 
        item.id === pizza.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...pizza, quantity: 1 }]);
    }
  };

  return (
    <div className="container">
      <div className="row">
        {pizzas.map((pizza) => (
          <div className="col-sm-12 col-md-6 col-lg-4" key={pizza.id}>
            <CardPizza 
              pizza={pizza} 
              addToCart={() => addToCart(pizza)} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
