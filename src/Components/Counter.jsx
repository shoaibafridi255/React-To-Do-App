import React, { useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;

    case "decrement":
      if (state > 0) return state - 1;
    case "reset":
      return 0;
    default:
      return state;
  }
};

const Counter = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div classNameName="container">
        <div classNameName="row">
          <div classNameName="col">
            <h1 classNameName="text-center">Basic Counter with useReducer</h1>
          </div>
        </div>

        <div classNameName="row mt-5">
          <div classNameName="col text-center">
            <h1 classNameName="text-center"> Count : {count} </h1>

            <button
              classNameName="btn btn-success mx-3"
              onClick={() => dispatch("increment")}
            >
              Increment
            </button>
            <button
              classNameName="btn btn-danger mx-3"
              onClick={() => dispatch("decrement")}
            >
              Decrement
            </button>
            <button
              classNameName="btn btn-info mx-3 "
              onClick={() => dispatch("reset")}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;
