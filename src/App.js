import './App.css';
import React from "react";
import TaskList from './components/TaskList';
import Background from './components/Background';
import LiveClock from './components/LiveClock';
import PullToRefresh from "pull-to-refresh-react";

function App() {

  return (
    <div className="App">
      {/* <PullToRefresh/> */}
      
      <Background />
      <LiveClock />
      <TaskList />
    </div>
  );
}

export default App;
