import React from "react";
import TodoListItem from "./TodoListItem";
import { useSelector } from "react-redux";
export default function TodoList() {
  const { todos } = useSelector((state) => state);
  console.log(todos);
  return (
    <div className="container">
      <div>
        {todos.todoList &&
          todos.todoList.map((todo, index) => (
            <TodoListItem key={todo.id} todo={todo} />
          ))}
      </div>
    </div>
  );
}
