/* eslint-disable no-unused-expressions */
import React from "react";
import { UseSelector, useSelector } from "react-redux";

function Todos() {
  useSelector((state) => state.todos.todos);



  return <div>Todos</div>;
}

export default Todos;
