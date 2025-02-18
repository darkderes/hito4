import { useState, useEffect } from "react";
const Pizza = () => {
  const [pizza, setPizza] = useState([]);

  const getPizza = async () => {
    const response = await fetch("http://localhost:5000/api/pizzas/p001");
    const data = await response.json();
    return setPizza(data);
  };
  useEffect(() => {
    getPizza();
  }, []);

  return (
    <>
      <h1>{pizza.name}</h1>
      <img src={pizza.img} alt={pizza.name} />
      <p>{pizza.desc}</p>
      <p>{pizza.price}</p>
      {pizza.ingredients && (
        <ul>
          {pizza.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      )}
      <button className="btn btn-dark">Add to Cart</button>
    </>
  );
};

export default Pizza;
