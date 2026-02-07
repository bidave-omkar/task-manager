const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchTasks = async () => {
  const res = await fetch(`${BASE_URL}/tasks`);
  return res.json();
};

export const createTask = async (task) => {
  const res = await fetch(`${BASE_URL}/tasks`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });
  return res.json();
};

export const updateTask = async (id, updates) => {
  const res = await fetch(`${BASE_URL}/tasks/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updates),
  });
  return res.json();
};

export const deleteTask = async (id) => {
  await fetch(`${BASE_URL}/tasks/${id}`, { method: "DELETE" });
};
