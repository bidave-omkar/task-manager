import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  const [reload, setReload] = useState(false);

  const refreshTasks = () => {
    setReload(!reload);
  };

  return (
    <div className="app">
      <h1 className="title">Task Manager</h1>
      <TaskForm onTaskAdded={refreshTasks} />
      <TaskList reload={reload} onRefresh={refreshTasks} />
    </div>
  );
}

export default App;
