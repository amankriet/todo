import "./App.css"
import { useEffect, useState } from "react"
import TaskForm from "./components/TaskForm"
import Task from "./components/Task"

function App() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const tasks = localStorage.getItem('tasks')
    if (tasks !== "[]") {
      setTasks(JSON.parse(tasks))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  function addTask(taskName) {
    setTasks(prev => {
      return [...prev, { name: taskName, done: false }]
    })
  }

  function updateTaskDone(taskIndex, done) {
    setTasks(prev => {
      const newTasks = [...prev]
      newTasks[taskIndex].done = done
      return newTasks
    })
  }

  const completedTasks = tasks.filter(task => task.done)

  function getMessage() {
    const percentage = completedTasks.length/tasks.length * 100

    switch (percentage) {
      case 0: return "Try to do at least one! 🙏"
      case 100: return 'Nice job for today! 💯'
      default: return 'Keep it going 💪'
    }
  }

  return (
    <main>
      <h1>Todo List</h1>
      <h2>{completedTasks.length}/{tasks.length} Complete</h2>
      <h3>{getMessage()}</h3>
      <TaskForm onAdd={addTask} />
      {tasks.map((task, index) => <Task {...task} onToggle={done => updateTaskDone(index, done)} />)}
    </main>
  );
}

export default App;
