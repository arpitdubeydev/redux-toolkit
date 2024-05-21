/* eslint-disable no-unused-expressions */
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/TodoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  console.log(todos);

  return (
    <>
      {/* <div>Todos</div>
      {todos.map((todo) => (
        <div key={todo.id}>{todo.text}</div>
      ))} */}

     <div className="container mx-auto mt-5">
  <table className="min-w-full divide-y divide-gray-200">
    <thead className="bg-gray-50">
      <tr>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Name
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Title
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Status
        </th>
      </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200">
      {todos.map((row) => (
        <tr key={row.id}>
          <td className="px-6 py-4 text-left whitespace-nowrap text-sm font-medium text-gray-900">
            {row.text} 
          </td>
          <td className="px-6 py-4 text-left whitespace-nowrap text-sm text-gray-500">
            {row.title}
          </td>
          <td className="px-6 py-4 text-left whitespace-nowrap text-sm text-gray-500">
            {row.status}
          </td>
          <td className="px-6 py-4 text-left whitespace-nowrap text-sm text-gray-500">
           <button onClick={() => dispatch(removeTodo(row.id))}>Click</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

    </>
  );
}

export default Todos;
