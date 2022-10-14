import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useState } from "react";

const List = ({ id, title, completed, deleteTodo, setTodoList, todoList }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isCompleted, setIsCompleted] = useState(completed);
  const [titleState, setTitleState] = useState(title);

  const handleEdit = (e) => {
    e.preventDefault();
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === id) {
          return { ...todo, title: titleState, completed: isCompleted };
        }
        return todo;
      })
    );
    setIsEditing(false);
    console.log("boom");
  };

  if (!isEditing) {
    return (
      <article className="todo" key={id}>
        <h4>
          {isCompleted ? (
            <s style={{ padding: 0 }}> {titleState}</s>
          ) : (
            titleState
          )}
        </h4>
        <div className="btn-container">
          <button
            type="button"
            className="edit-btn"
            onClick={() => setIsEditing(true)}
          >
            <FaEdit />
          </button>
          <button
            type="button"
            className="delete-btn"
            onClick={() => deleteTodo(id)}
          >
            <FaTrash />
          </button>
        </div>
      </article>
    );
  }
  if (isEditing) {
    return (
      <article className="todo-edit" key={id}>
        <form className="edit-container" onSubmit={handleEdit}>
          <input
            type="text"
            id="edit"
            name="edit"
            value={titleState}
            onChange={(e) => {
              setTitleState(e.target.value);
            }}
            className="todo-input-edit"
          />
          <input
            className="checkbox"
            type="checkbox"
            id="topping"
            name="topping"
            value="completed"
            checked={isCompleted}
            onChange={() => setIsCompleted(!isCompleted)}
          />
        </form>
        <button type="submit" className="submit-btn" onClick={handleEdit}>
          Edit
        </button>
      </article>
    );
  }
};

export default List;
