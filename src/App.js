import "./App.css"
import { useEffect, useState } from "react"
import TaskForm from "./components/TaskForm"
import Task from "./components/Task"

// Base URL for the Spring Boot Todo API
const API_URL = "http://localhost:8080/todos";

function App() {
  const [tasks, setTasks] = useState([])

  // Fetch all tasks from the API when component mounts
  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setTasks(data))
      .catch((err) => console.error("Error fetching tasks:", err));
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  // Create a new task on the server
  function addTask(taskName) {
    fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ task: taskName, completed: false }),
    })
      .then((response) => response.json())
      .then((newTask) => setTasks((prev) => [...prev, newTask]))
      .catch((err) => console.error("Error creating task:", err));
  }

  // Update the done status of a task on the server
  function updateTaskDone(taskIndex, done) {
    const taskToUpdate = tasks[taskIndex]
    fetch(`${API_URL}/${taskToUpdate.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...taskToUpdate, completed: done }),
    })
      .then((response) => response.json())
      .then((updatedTask) => {
        setTasks((prev) => {
          const newTasks = [...prev]
          newTasks[taskIndex] = updatedTask
          return newTasks
        })
      })
      .catch((err) => console.error("Error updating task:", err)
      )
  }

  // Delete a task from the server
  function removeTask(taskIndex) {
    const taskToDelete = tasks[taskIndex]
    fetch(`${API_URL}/${taskToDelete.id}`, {
      method: "DELETE",
    })
      .then(() => {
        setTasks((prev) => {
          return prev.filter((task, index) => index !== taskIndex)
        })
      })
      .catch((err) => console.error("Error deleting task:", err));
  }

  // Rename a task on the server
  function renameTask(taskIndex, taskName) {
    const taskToUpdate = tasks[taskIndex]
    fetch(`${API_URL}/${taskToUpdate.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...taskToUpdate, task: taskName }),
    })
      .then((response) => response.json())
      .then((updatedTask) => {
        setTasks((prev) => {
          const newTasks = [...prev]
          newTasks[taskIndex] = updatedTask
          return newTasks
        })
      })
      .catch((err) => console.error("Error renaming task:",
        err)
      )
  }

  const completedTasks = tasks.filter(task => task.completed)

  function getMessage() {
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
        {completedTasks.length}/{tasks.length} Complete
      </h2>
      <h3>{getMessage()}</h3>
      <TaskForm onAdd={addTask} />
      {tasks.map((task, index) => (
        <Task
          key={task.id}
          {...task}
          onRename={(taskName) => renameTask(index, taskName)}
          onDelete={() => removeTask(index)}
          onToggle={(done) => updateTaskDone(index, done)}
        />
      ))}
    </main>
  )
}

export default App
