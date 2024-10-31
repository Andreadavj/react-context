import React from "react";
import PropTypes from "prop-types";

const CardPizza = ({ pizza, addToCart }) => {
  return (
    <div className="card">
      <img src={pizza.image} className="card-img-top" alt={pizza.name} />
      <div className="card-body">
        <h5 className="card-title">{pizza.name}</h5>
        <p className="card-text">
          🍕 {pizza.ingredients.join(", ")}
        </p>
        <p className="price">Precio: ${pizza.price.toLocaleString()}</p>

        <div>
          <button onClick={addToCart} className="btn btn-success"> 🛒 Añadir</button>
        </div>
      </div>
    </div>
  );
};

CardPizza.propTypes = {
  pizza: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default CardPizza;
