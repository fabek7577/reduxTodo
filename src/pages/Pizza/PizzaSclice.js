import { createSlice } from "@reduxjs/toolkit";

export const PizzaSlice = createSlice({
  name: "pizza",
  initialState: {
    pizzaList: [
      {
        id: 15151,
        title: "Peperoni",
        description:
          "Pepperoni is a spicy variety of Italian-American salami, as well as the name of an American-origin pizza. It is made from pork, although American variations made from chicken, beef, etc. can also be found.",
        price: 19,
        size: "sm",
        count: 0,
        selected: false,
      },
      {
        id: 218755,
        title: "Belga",
        description:
          "Could this be Vietnam’s best pizza? This popular pizzeria in Hanoi is not just a haven for homesick Westerners, it’s an authentic taste of Naples. The wood-fired oven cooks the Neapolitan pizzas in seconds, topped with the freshest, natural ingredients. The Pizza Emilio is a must-try – goat cheese, pancetta, mushrooms, and garlic make flavours to remember. And you can wash it down with a selection of Belgian beers.",
        price: 15,
        size: "sm",
        count: 0,
        selected: false,
      },
      {
        id: 3379155,
        title: "Motorino",
        description:
          "Motorino honours the time-old traditions of Napoli in two stylish Hong Kong settings. Pizzas here are thin and crispy, baked in a custom-made Stefano Ferrar oven at burning hot heat for less than 90 seconds. Gourmet toppings range from the traditional mozzarella di buffalo to Hong Kong-inspired pork belly.",
        price: 23,
        size: "sm",
        count: 0,
        selected: false,
      },
      {
        id: 2248995,
        title: "Sotto Pinsa",
        description:
          "The pizzas at Sotto Pinsa Romana are simple, but far from slap-dash. You can almost taste the love and passion. Roman-style pizzas are thin, long and crispy, topped with fresh ingredients like creamy buffalo mozzarella, fresh tomatoes, and locally cured meats. Even Trip Advisor agrees: Sotto Pinsa Roman is the top restaurant in the city and has a mighty five score scoring from over 2,114 customers too.",
        price: 20,
        size: "sm",
        count: 0,
        selected: false,
      },
    ],
  },
  reducers: {
    selectPizza: (state, action) => {
      state.pizzaList = state.pizzaList.map((pizza) => {
        if (pizza.id == action.payload) {
          pizza.selected = true;
        }
        return pizza;
      });
    },
    unSelectPizza: (state, action) => {
      state.pizzaList = state.pizzaList.map((pizza) => {
        if (pizza.id == action.payload) {
          pizza.selected = false;
        }
        return pizza;
      });
    },
    setSize: (state, action) => {
      state.pizzaList = state.pizzaList.map((pizza) => {
        if (pizza.id == action.payload.id) {
          pizza.size = action.payload.size;
        }
        return pizza;
      });
    },
    setCount: (state, action) => {
      state.pizzaList = state.pizzaList.map((pizza) => {
        if (pizza.id == action.payload.id) {
          pizza.count = action.payload.count;
        }
        return pizza;
      });
    },
    setPrice: (state, action) => {
      state.pizzaList = state.pizzaList.map((pizza) => {
        if (pizza.id == action.payload.id) {
          pizza.price = action.payload.price;
        }
        return pizza;
      });
    },
  },
});
export const { selectPizza, unSelectPizza, setSize, setCount, setPrice } =
  PizzaSlice.actions;
export default PizzaSlice.reducer;
