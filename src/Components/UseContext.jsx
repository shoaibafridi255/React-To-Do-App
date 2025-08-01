import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const UseContext = () => {
  const { theme, toggelTheme } = useContext(ThemeContext);

  return (
    <div
      className="container"
      style={{
        background: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white",
      }}
    >
      <div className="row">
        <div className="col">
          <h1 className="text-center"> UseContext </h1>
          <h1 className="text-center"> Current Theme: {theme} </h1>

          <button className="btn btn-success" onClick={() => toggelTheme()}>
            SwitchTheme
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseContext;
