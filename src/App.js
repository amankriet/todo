import "./App.css"
import { useEffect, useState } from "react"
import TaskForm from "./components/TaskForm"
import Task from "./components/Task"
import { addTodo, deleteTodo, fetchTodos, updateTodo } from "./api/todoApi"

function App() {
  const [tasks, setTasks] = useState([])

  // Fetch all tasks from the API when component mounts
  useEffect(() => {
    fetchTodos()
      .then((data) => setTasks(data))
      .catch((err) => console.error("Error fetching tasks:", err));
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  // API interactions
  // Create a new task on the server
  function addTask(taskName) {
    addTodo(taskName)
      .then((newTask) => setTasks((prev) => [...prev, newTask]))
      .catch((err) => console.error("Error creating task:", err));
  }

  // Update the done status of a task on the server
  const handleToggleTask = (id, done) => {
    const taskToUpdate = tasks.find((task) => task.id === id);
    if (!taskToUpdate) return;
    updateTodo(id, { ...taskToUpdate, completed: done })
      .then((updatedTask) =>
        setTasks((prev) =>
          prev.map((task) => (task.id === id ? updatedTask : task))
        )
      )
      .catch((err) => console.error("Error updating task:", err));
  }

  // Delete a task from the server
  const handleDeleteTask = (id) => {
    deleteTodo(id)
      .then(() => setTasks((prev) => prev.filter((task) => task.id !== id)))
      .catch((err) => console.error("Error deleting task:", err));
  };

  // Rename a task on the server
  const handleRenameTask = (id, taskName) => {
    const taskToUpdate = tasks.find((task) => task.id === id);
    if (!taskToUpdate) return;
    updateTodo(id, { ...taskToUpdate, task: taskName })
      .then((updatedTask) =>
        setTasks((prev) =>
          prev.map((task) => (task.id === id ? updatedTask : task))
        )
      )
      .catch((err) => console.error("Error renaming task:", err));
  };

  const completedTasks = tasks.filter(task => task.completed)

  function getMessage() {
    if (tasks.length === 0) return "No tasks yet! 🥱"
    const percentage = completedTasks.length / tasks.length * 100

    switch (percentage) {
      case 0: return "Try to do at least one! 🙏"
      case 100: return 'Nice job for today! 💯'
      default: return 'Keep it going 💪'
    }
  }

  return (
    <main>
      <h1>Todo List</h1>
      <h2>
        {completedTasks.length}/{tasks.length > 0 ? tasks.length : 1} Complete
      </h2>
      <h3>{getMessage()}</h3>
      <TaskForm onAdd={addTask} />
      {tasks.map((task) => (
        <Task
          key={task.id}
          {...task}
          onRename={(taskName) => handleRenameTask(task.id, taskName)}
          onDelete={() => handleDeleteTask(task.id)}
          onToggle={(done) => handleToggleTask(task.id, done)}
        />
      ))}
    </main>
  )
}

export default App
