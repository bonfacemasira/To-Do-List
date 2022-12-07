import React, { useState, useEffect } from "react";
import Task from "./Task";
import TaskForm from "./TaskForm";
// import 'rsuite/dist/styles/rsuite-default.css';
// import "rsuite/Button/styles/index.less";
import { Toggle } from "rsuite";

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [currentView, setCurrentView] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3001/tasks")
      .then((r) => r.json())
      .then((tasks) => setTasks(tasks));
  }, []);

  function handleUpdateTask(updatedTask) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === updatedTask.id) {
        return updatedTask;
      } else {
        return task;
      }
    });
    setTasks(updatedTasks);
  }

  function handleAddTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  function handleDeleteTask(deletedTask) {
    const updatedTasks = tasks.filter((task) => task.id !== deletedTask.id);
    setTasks(updatedTasks);
  }

  return (
    <div className="TaskList">
      <h3>Today</h3>
      <TaskForm onAddTask={handleAddTask} />
      <Toggle
        onChange={(value) => {
          setCurrentView(value);
        }}
      />
      {currentView === true ? "List View" : "Card View"}
      <ul className="Tasks">
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onUpdateTask={handleUpdateTask}
            onDeleteTask={handleDeleteTask}
            view = {currentView}
          />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
