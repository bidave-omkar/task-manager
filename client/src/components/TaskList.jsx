import { useEffect, useState } from "react";
import { fetchTasks, updateTask, deleteTask } from "../api/taskApi";

export default function TaskList({ reload, onRefresh }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks().then(setTasks);
  }, [reload]);

  const handleStatusChange = async (id, status) => {
    await updateTask(id, { status });
    setTasks((prev) =>
      prev.map((task) =>
        task._id === id ? { ...task, status } : task
      )
    );
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    onRefresh();
  };

  return (
    <div className="task-list">
      {tasks.length === 0 && (
        <p className="empty">No tasks created yet</p>
      )}

      {tasks.map((task) => (
        <div className="task-card" key={task._id}>
          <div className="task-left">
            <h3>{task.title}</h3>
            <p>{task.description}</p>
          </div>

          <div className="task-right">
            <select
              value={task.status}
              onChange={(e) =>
                handleStatusChange(task._id, e.target.value)
              }
            >
              <option value="pending">Pending</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>

            <button
              className="delete-btn"
              onClick={() => handleDelete(task._id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
