import './App.css';
import React from "react";
import TaskList from './components/TaskList';
import Background from './components/Background';

function App() {

  return (
    <div className="App">
      <Background />
      <TaskList />
    </div>
  );
}

export default App;
