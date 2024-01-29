import React from "react";
import "./Bill.scss";
import { useSelector } from "react-redux";
const Bill = ({ setBill }) => {
  const { pizzaList } = useSelector((state) => state.pizza);
  return (
    <div className="bill">
      <h1>Bill</h1>
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
      <button
        className="btn btn-primary px-5 mt-4"
        onClick={() => setBill(false)}
      >
        Close
      </button>
    </div>
  );
};

export default Bill;
