// Base URL for the Spring Boot Todo API
const API_URL = "http://localhost:8080/todos";

export const fetchTodos = async () => {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Error fetching tasks");
    return response.json();
};

export const addTodo = async (taskName) => {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ task: taskName, completed: false })
    });
    if (!response.ok) throw new Error("Error adding task");
    return response.json();
};

export const updateTodo = async (id, data) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });
    if (!response.ok) throw new Error("Error updating task");
    return response.json();
};

export const deleteTodo = async (id) => {
    const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    if (!response.ok) throw new Error("Error deleting task");
    return true;
};