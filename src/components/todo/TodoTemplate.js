import React from "react";
import "./TodoTemplate.css";
const TodoTemplate = (props) => {
  return (
    <div className="TodoTemplate">
      <div className="app-title">{props.day_of_week}</div>
      <div className="content">{props.children}</div>
    </div>
  );
};

export default TodoTemplate;
