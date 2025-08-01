import React, { useState } from "react";
import DisplayTodoes from "./DisplayTodoes";

const TodoApp = () => {
  const [inputValue, setinputvalue] = useState("");
  const [todo, setTodo] = useState([]);

  // const handelChange = (e) => {

  // };

  const handelSubmit = (e) => {
    e.preventDefault();
    setTodo([...todo, inputValue]);
    setinputvalue("");
  };
  // console.log("The Todo is :", todo);

  return (
    <>
      <div classNameName="container">
        <div classNameName="row">
          <div classNameName="col">
            <h1 classNameName="text-center">TODO APP by useReducer</h1>
          </div>
        </div>
        <div classNameName="row ">
          <div classNameName="col-2"></div>
          <div classNameName="col-8">
            <input
              type="text"
              classNameName="form-control border border-dark"
              name="todo"
              value={inputValue}
              placeholder="Enter Todos"
              onChange={(e) => setinputvalue(e.target.value)}
            />
          </div>

          <div classNameName="col-2">
            <button classNameName="btn btn-success " onClick={handelSubmit}>
              ADD
            </button>
          </div>
        </div>
        <div classNameName="row">
          <div classNameName="col-8 offset-2 mt-3">
            <DisplayTodoes todovalue={todo} />
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoApp;
