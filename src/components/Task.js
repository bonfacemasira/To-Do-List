import React from "react";

function Task({ view, task, onUpdateTask, onDeleteTask }) {
  // const taskData = {
  //   name: name,
  //   category: category,
  // };

  function handleDeleteTask() {
    fetch(`http://localhost:3001/tasks/${task.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => onDeleteTask(task));
  }

  function handleEditTask() {
    fetch(`http://localhost:3001/tasks/${task.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: task.name,
        category: task.category,
      }),
    })
      .then((r) => r.json())
      .then((updatedTask) => onUpdateTask(updatedTask));
  }

  return (
    <>
      {view === true ? (
        <li className={task.isInCart ? "in-cart" : ""}>
          <span>{task.name}</span>
          <span className="category">{task.category}</span>
          <button className="formButton" onClick={handleEditTask}>
            Edit
          </button>
          <button className="formButton" onClick={handleDeleteTask}>
            Delete
          </button>
        </li>
      ) : (
        <div>
          <div className="card">CARD</div>
        </div>
      )}
    </>
  );
}

export default Task;
