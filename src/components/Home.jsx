import CardPizza from "./CardPizza";
import Header from "./Header";
import { pizzas } from "../pizzas";

const Home = () => {
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
