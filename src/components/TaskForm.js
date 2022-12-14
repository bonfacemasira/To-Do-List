import React, { useState } from "react";

function TaskForm({ onAddTask }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Morning");

  function handleSubmit(e) {
    e.preventDefault();

    const taskData = {
      name: name,
      category: category,
    };
    fetch("http://localhost:3001/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(taskData),
    })
      .then((r) => r.json())
      .then((newTask) => onAddTask(newTask));
  }

  return (
    <div className="Form">
      <form className="NewItem" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="New Todo"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>
          Time:
        <select
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Morning">Morning</option>
          <option value="Evening">Evening</option>
        </select>
        </label>
        <button type="submit" onClick={handleSubmit}>
          Add to List
        </button>
      </form>
    </div>
  );
}

export default TaskForm;