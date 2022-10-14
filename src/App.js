import "./App.css";
import List from "./list";
import Alert from "./alert";

import React, { useState, useEffect } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [alertObj, setAlertObj] = useState({ show: true, type: "", msg: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo) {
      alert("HI");
    } else {
      setTodoList([
        ...todoList,
        { id: new Date().getTime().toString(), title: todo, completed: false },
      ]);
      setTodo("");
    }
  };

  const deleteTodo = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };
  return (
    <>
      <main>
        {alertObj.show && (
          <Alert alertObj={alertObj} setAlertObj={setAlertObj} />
        )}
        <section className="section">
          <h3>Todo App</h3>
          <form className="add-todo-form" onSubmit={handleSubmit}>
            <label htmlFor="todo"></label>
            <input
              type="text"
              className="todo-input"
              id="todo"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </section>
        <section className="todos-container">
          {todoList.map((singleTodo) => {
            return (
              <List
                {...singleTodo}
                deleteTodo={deleteTodo}
                key={singleTodo.id}
                setTodoList={setTodoList}
                todoList={todoList}
              />
            );
          })}
          {todoList.length > 0 && (
            <button
              className="clear-btn"
              onClick={() => {
                setTodoList([]);
              }}
            >
              Clear-All
            </button>
          )}
        </section>
      </main>
    </>
  );
}

export default App;
