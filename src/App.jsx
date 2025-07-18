import React, { useEffect, useState } from "react";
import EnterdTodosBody from "./Components/EnterdTodosBody";

const App = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [editeIndex, setEditeIndex] = useState(null);

  const handelUpdate = (index) => {
    setTask(todos[index].name);
    setEditeIndex(index);
  };

  const handelChange = (e) => {
    setTask(e.target.value);
  };

  const handelSubmit = (e) => {
    e.preventDefault();

    if (task.trim() === "") return;

    const newTodo = {
      name: task,
      time: new Date().toLocaleTimeString(),
      date: new Date().toLocaleDateString(),
    };

    if (editeIndex !== null) {
      const updatedTodos = [...todos];
      updatedTodos[editeIndex] = newTodo;
      setTodos(updatedTodos);
      setEditeIndex(null);
    } else {
      setTodos((prev) => [...prev, newTodo]);
    }
    setTask("");
  };
  const handelDelete = (indexToDelte) => {
    const filteredTodos = todos.filter((_, index) => index !== indexToDelte);
    setTodos(filteredTodos);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="text-center">React TO-DO APP</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-11">
            <input
              type="text"
              value={task}
              className="form-control-lg border border-primary w-100"
              placeholder="Enter Todos"
              onChange={handelChange}
            />
          </div>
          <div className="col-1">
            <button className="btn btn-primary btn-lg" onClick={handelSubmit}>
              ADD
            </button>
          </div>
        </div>
        <EnterdTodosBody
          onsubmit={todos}
          onDelete={handelDelete}
          onUpdate={handelUpdate}
        />
      </div>
    </>
  );
};

export default App;
