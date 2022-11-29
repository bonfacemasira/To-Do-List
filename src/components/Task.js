import React from "react";

function Task({ task, onUpdateTask, onDeleteTask }) {
  function handleDeleteTask() {
    fetch(`http://localhost:3001/tasks/${task.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => onDeleteTask(task));
  }

  console.log(task)
  function handleEditTask() {
    // fetch(`http://localhost:3001/tasks/${task.id}`, {
    //   method: "PATCH",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     isInCart: !task.isInCart,
    //   }),
    // })
    //   .then((r) => r.json())
    //   .then((updatedTask) => onUpdateTask(updatedTask));
  }

  return (
    <li className={task.isInCart ? "in-cart" : ""}>
      <span>{task.name}</span>
      <span className="category">{task.category}</span>
      <button
        className="formButton"
        onClick={handleEditTask}
      >
        Edit
      </button>
      <button className="formButton" onClick={handleDeleteTask}>
        Delete
      </button>
    </li>
  );
}

export default Task;