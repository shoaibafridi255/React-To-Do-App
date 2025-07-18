import React from "react";

const EnterdTodosBody = ({ onsubmit, onDelete, onUpdate }) => {
  return (
    <div className="contanier mt-4">
      <div className="row">
        <div className="col-11">
          {onsubmit.length === 0 ? (
            <p className="text-center lead">PLease Entered Todos</p>
          ) : (
            <ul class="list-group">
              {onsubmit.map((todo, i) => {
                return (
                  <li
                    key={i}
                    class="list-group-item border border-success d-flex justify-content-between align-items-center my-2"
                  >
                    <strong> {todo.name} </strong>

                    <div>
                      <strong> {todo.time} </strong> /
                      <strong> {todo.date} </strong>
                      <button
                        className="btn btn-danger mx-2"
                        onClick={() => onDelete(i)}
                      >
                        Delete
                      </button>
                      <button
                        className="btn btn-success"
                        onClick={() => onUpdate(i)}
                      >
                        Update
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default EnterdTodosBody;
