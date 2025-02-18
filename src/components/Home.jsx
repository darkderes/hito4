import { useEffect, useState } from "react";
import CardPizza from "./CardPizza";
import Header from "./Header";
// import { pizzas } from "../pizzas";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  const getPizzas = async () => {
    const response = await fetch("http://localhost:5000/api/pizzas");
    const data = await response.json();
    return setPizzas(data);
  };

  useEffect(() => {
    getPizzas();
  }, []);

  return (
    <>
      <Header />
      <div className="my-4 container">
        <div className="row">
          {pizzas.map((pizza) => (
            <div key={pizza.id} className="col-md-4 mb-4">
              <CardPizza
                name={pizza.name}
                img={pizza.img}
                price={pizza.price}
                description={pizza.desc}
                ingredients={pizza.ingredients}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
