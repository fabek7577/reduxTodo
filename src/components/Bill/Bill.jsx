import React, { useEffect, useState } from "react";
import styles from "./Bill.module.scss";
import { useSelector } from "react-redux";
const Bill = ({ setBill }) => {
  const { pizzaList } = useSelector((state) => state.pizza);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    pizzaList.map((pizza) => {
      if (pizza.selected) {
        setTotalPrice((prev) => (prev += pizza.price * pizza.count));
      }
    });
  }, []);
  return (
    <div className={styles.bill}>
      <h1 className="text-light my-3">Bill</h1>
      <table>
        <tbody>
          <tr>
            <th>Pizza name</th>
            <th>Size</th>
            <th>Count</th>
            <th>Price</th>
            <th>Total price</th>
          </tr>
        </tbody>
        {pizzaList.map((pizza) => {
          if (!pizza.selected) {
            return;
          }
          return (
            <tbody key={pizza.id}>
              <tr>
                <td>{pizza.title}</td>
                <td>{pizza.size}</td>
                <td>{pizza.count}</td>
                <td>{pizza.price}</td>
                <td>{pizza.price * pizza.count}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
      <div className={styles.buy}>
        <button className="btn btn-primary px-5" onClick={() => setBill(false)}>
          Buy
        </button>
        <span>Total price: {totalPrice}$</span>
      </div>
    </div>
  );
};

export default Bill;
