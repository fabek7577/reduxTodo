import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../todos/TodosSlice";

const CreateTodo = () => {
  const dispatch = useDispatch();
  const [inp, setInp] = useState("");
  return (
    <div className="container col-7">
      <h1 className="text-center">To do List</h1>
      <form className="d-flex align-items-center form-group gap-3 mt-3">
        <label className="w-100 d-flex align-items-center">
          <input
            type="text"
            className="w-100 form-control"
            value={inp}
            onChange={(e) => setInp(e.target.value)}
          />
        </label>
        <button
          className="btn btn-primary"
          onClick={(e) => {
            e.preventDefault();
            if (inp.trim() == "") {
              alert("Enter text");
            } else {
              dispatch(addTodo(inp));
              setInp("");
            }
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default CreateTodo;
