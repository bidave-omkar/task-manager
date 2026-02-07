import { useState } from "react";
import { createTask } from "../api/taskApi";

export default function TaskForm({ onTaskAdded }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    await createTask({ title, description });
    setTitle("");
    setDescription("");
    onTaskAdded();
  };

  return (
    <form className="task-form" onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="What needs to be done?"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <textarea
        placeholder="Add some details (optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button className="primary-btn">Add Task</button>
    </form>
  );
}