import './App.css';
import React from "react";
import TaskList from './components/TaskList';
import Background from './components/Background';
import LiveClock from './components/LiveClock';

function App() {

  return (
    <div className="App">
      <Background />
      <LiveClock />
      <TaskList />
    </div>
  );
}

export default App;
