import React from "react";

const ToDoList = (props) => {
  return (
    <div style={{ marginLeft: "50px", display: "block" }}>
      <p>{props.textTodo}</p>
      <p>Date: {props.dateTodo}</p>
    </div>
  );
};

export default ToDoList;