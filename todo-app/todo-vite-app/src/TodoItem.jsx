import React, { useState } from "react";
import { FaEdit, FaTrash, FaSave, FaTimes } from "react-icons/fa";

const TodoItem = ({ todo, onDelete, onEdit, toggleEditing }) => {
  const [editText, setEditText] = useState(todo.text);

  return (
    <div className="todo-item">
      {todo.isEditing ? (
  <>
    <input
      value={editText}
      onChange={(e) => setEditText(e.target.value)}
    />
    <button onClick={() => onEdit(todo.id, editText)}>
      <FaSave />
    </button>
    <button onClick={() => toggleEditing(todo.id)}>
      <FaTimes />
    </button>
  </>
) : (
  <>
    <span>{todo.text}</span>
    <button onClick={() => toggleEditing(todo.id)}>
      <FaEdit />
    </button>
    <button onClick={() => onDelete(todo.id)}>
      <FaTrash />
    </button>
  </>
)}

    </div>
  );
};

export default TodoItem;
