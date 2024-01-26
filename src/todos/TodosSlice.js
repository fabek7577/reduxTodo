import { createSlice } from "@reduxjs/toolkit";

export const TodosSlice = createSlice({
  name: "todos",
  initialState: {
    todoList: [
      {
        id: 15151,
        title: "Farrux",
      },
    ],
  },
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload,
      };
      state.todoList = [...state.todoList, newTodo];
    },
    editTodo: (state, action) => {
      state.todoList.filter((todo) => {
        if (todo.id == action.payload.id) {
          todo.title = action.payload.title;
        }
      });
      console.log(state);
    },
    deleteTodo: (state, action) => {
      state.todoList = state.todoList.filter(
        (todo) => todo.id !== action.payload
      );
    },
  },
});
export const { addTodo, editTodo, deleteTodo } = TodosSlice.actions;
export default TodosSlice.reducer;
