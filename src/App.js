import './App.css';
import TaskForm from './components/TaskForm';
import React, { useState, useEffect } from "react";
import Task from './components/Task';
import TaskList from './components/TaskList';

function App() {

  return (
    <div className="App">
      <TaskList />
    </div>
  );
}

export default App;
