// src/TodoItem.js
import React, { useState } from "react";

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
          <button onClick={() => onEdit(todo.id, editText)}>Save</button>
          <button onClick={() => toggleEditing(todo.id)}>Cancel</button>
        </>
      ) : (
        <>
          <span>{todo.text}</span>
          <button onClick={() => toggleEditing(todo.id)}>Edit</button>
          <button onClick={() => onDelete(todo.id)}>Delete</button>
        </>
      )}
    </div>
  );
};

export default TodoItem;
