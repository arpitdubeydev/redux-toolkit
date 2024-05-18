/* eslint-disable no-unused-expressions */
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/TodoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [editRowId, setEditRowId] = useState(null);
  const [editFormData, setEditFormData] = useState({});

  const handleEditClick = (row) => {
    setEditRowId(row.id);
    setEditFormData({ name: row.name, title: row.title, status: row.status });
  };

  const handleUpdateClick = () => {
    onUpdate(editRowId, editFormData);
    setEditRowId(null);
  };

  const handleCancelClick = () => {
    setEditRowId(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditFormData({ ...editFormData, [name]: value });
  };


  return (
    <>
      <div>Todos</div>
      {todos.map((todo) => (
        <div key={todo.id}>{todo.text}</div>
      ))}

<div className="container mx-auto mt-5">
      <table className="min-w-full divide-y divide-gray-200">
        {/* Table headers */}
        <thead className="bg-gray-50">
          {/* ... */}
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {todos.map((row) => (
            <tr key={row.id}>
              {editRowId === row.id ? (
                // Editable row
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  <input
                    type="text"
                    name="name"
                    value={editFormData.name}
                    onChange={handleInputChange}
                  />
                </td>
                // ... other editable cells
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button onClick={handleUpdateClick}>Update</button>
                  <button onClick={handleCancelClick}>Cancel</button>
                </td>
              ) : (
                // Non-editable row
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {row.name}
                </td>
                // ... other non-editable cells
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button onClick={() => handleEditClick(row)}>Edit</button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    </>
  );
}

export default Todos;
