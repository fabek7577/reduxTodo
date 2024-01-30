import React, { useState } from "react";
import PizzaItem from "./PizzaItem";
import { useSelector } from "react-redux";
import Bill from "../../components/Bill/Bill";
const Pizza = () => {
  const { pizzaList } = useSelector((state) => state.pizza);
  const [bill, setBill] = useState(false);
  return (
    <div className="container">
      <h1 className="text-center">Pizza</h1>
      <div className="row d-flex justify-content-between">
        {pizzaList &&
          pizzaList.map((pizza) => {
            return <PizzaItem key={pizza.id} pizza={pizza} />;
          })}
      </div>
      <div className="text-center my-4">
        <button
          className="btn btn-warning text-light px-5"
          onClick={() => setBill(true)}
        >
          Purchase
        </button>
        {bill && <Bill setBill={setBill} />}
      </div>
    </div>
  );
};

export default Pizza;
