import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo } from "../todos/TodosSlice";

export default function TodoListItem({ todo }) {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [inp, setInp] = useState(todo.title);

  return (
    <>
      <div className="shadow border rounded d-flex justify-content-between align-items-center px-3 py-2 mt-3">
        {!edit ? (
          <h1>{todo.title}</h1>
        ) : (
          <input
            type="text"
            value={inp}
            onChange={(e) => setInp(e.target.value)}
          />
        )}
        <div className="d-flex gap-4">
          <button
            className="btn btn-success"
            onClick={() => {
              setEdit((prev) => !prev);
              edit && dispatch(editTodo({ id: todo.id, title: inp }));
            }}
          >
            <span>{edit ? "Done" : "Edit"}</span>
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              dispatch(deleteTodo(todo.id));
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}
