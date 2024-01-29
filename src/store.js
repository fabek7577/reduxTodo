import { configureStore } from "@reduxjs/toolkit";
import TodosSlice from "./todos/TodosSlice";
import PizzaSclice from "./pages/Pizza/PizzaSclice";

const store = configureStore({
  reducer: {
    todos: TodosSlice,
    pizza: PizzaSclice,
  },
});

export default store;
