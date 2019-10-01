import React from "react";

export default function TodoForm (props) {
  
  
    return (
      <>
        <form onSubmit={props.submitTodo}>
          <input
            type="text"
            value={props.list}
            name="list"
            onChange={props.handleChanges}
          />
          <button>Add Todo</button>
          <button
            className="clear-btn"
            onClick={props.clearCompletedTodos}
          >
            Clear Completed
          </button>
        </form>
      </>
    );
  }

