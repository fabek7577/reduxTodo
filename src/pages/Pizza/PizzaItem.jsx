import React, { useEffect, useRef, useState } from "react";
import pizzaImage from "../../../public/pizzaImage.png";
import { useDispatch } from "react-redux";
import {
  selectPizza,
  setCount,
  setPrice,
  setSize,
  unSelectPizza,
} from "./PizzaSclice";
import styles from "./Pizza.module.scss";
const PizzaItem = ({ pizza }) => {
  const disptach = useDispatch();
  const description =
    pizza.description.length > 205
      ? pizza.description.split(" ").splice(0, 35).join(" ") + "..."
      : pizza.description;

  const [sm, setSm] = useState("");
  const [md, setMd] = useState("");
  const [lg, setLg] = useState("");
  const [orderBtn, setOrderBtn] = useState(false);
  const [counter, setCounter] = useState(1);
  const [pizzaPrice, setPizzaPrice] = useState(pizza.price);
  useEffect(() => {
    setSm("sm");
  }, []);

  useEffect(() => {
    setOrderBtn(false);
    disptach(unSelectPizza(pizza.id));
  }, [sm, md, lg, counter]);

  useEffect(() => {
    setPizzaPrice(
      Math.floor(
        (sm && pizza.price) ||
          (md && pizza.price * 1.2) ||
          (lg && pizza.price * 1.5)
      )
    );
  }, [sm, md, lg]);

  return (
    <div
      className={`${styles.pizzaCard} mb-3 p-3 mx-2 rounded ${
        orderBtn && "shadow"
      }`}
    >
      <div className={styles.image}>
        <img src={pizzaImage} alt="" />
      </div>
      <div className={`${styles.body} text-center`}>
        <h3>{pizza.title}</h3>
        <p className={styles.desc}>{description}</p>
        <div className="d-flex w-100 gap-4 align-items-center justify-content-between">
          <div className={styles.size}>
            <label className={sm && styles.checked}>
              <span>
                <input
                  type="checkbox"
                  onChange={() => {
                    setSm("sm");
                    setMd(false);
                    setLg(false);
                  }}
                />
                sm
              </span>
            </label>
            <label className={md && styles.checked}>
              <span>
                <input
                  type="checkbox"
                  onChange={() => {
                    setSm(false);
                    setMd("md");
                    setLg(false);
                  }}
                />
                md
              </span>
            </label>
            <label className={lg && styles.checked}>
              <span>
                <input
                  type="checkbox"
                  onChange={() => {
                    setSm(false);
                    setMd(false);
                    setLg("lg");
                  }}
                />
                lg
              </span>
            </label>
          </div>
          <strong>{pizzaPrice}$</strong>
        </div>
        <div className={styles.count}>
          <button
            onClick={() => {
              counter >= 2 ? setCounter((prev) => (prev -= 1)) : "";
            }}
          >
            -
          </button>
          <span>{counter}</span>
          <button onClick={() => setCounter((prev) => (prev += 1))}>+</button>
        </div>
        <button
          className={`${orderBtn && styles.checked} ${styles.order} shadow`}
          onClick={() => {
            setOrderBtn(!orderBtn);
            if (!orderBtn) {
              disptach(selectPizza(pizza.id));
              disptach(setSize({ id: pizza.id, size: sm || md || lg }));
              disptach(setCount({ id: pizza.id, count: counter }));
              disptach(setPrice({ id: pizza.id, price: pizzaPrice }));
            } else disptach(unSelectPizza(pizza.id));
          }}
        >
          {orderBtn ? "Unorder" : "Order"}
        </button>
      </div>
    </div>
  );
};

export default PizzaItem;
