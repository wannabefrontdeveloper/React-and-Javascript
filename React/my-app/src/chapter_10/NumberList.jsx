import React from "react";

function NumberList(props) {

  const todos = props.numbers;

  const todoItems = todos.map((todo, index) => (
    <li key={index}>
      {todo}
    </li>
  ));

  return (
    <ul>
      {todoItems}
    </ul>
  );
}

export default NumberList;
