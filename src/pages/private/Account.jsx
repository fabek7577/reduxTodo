import React, { useReducer, useRef, useState } from "react";
import CreateTodo from "../../components/CreateTodo";
import TodoList from "../../components/TodoList";

const Account = () => {
  return (
    <>
      <CreateTodo />
      <TodoList />
    </>
  );
};

export default Account;
