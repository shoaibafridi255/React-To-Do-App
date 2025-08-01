import React, { useState } from "react";

const DisplayTodoes = ({ todovalue }) => {
  return (
    <>
      <ul className="list-group">
        {todovalue.map((todo, index) => {
          return (
            <li key={index} className="list-group-item">
              {todo}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default DisplayTodoes;
