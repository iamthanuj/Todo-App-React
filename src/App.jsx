import React from 'react'
import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, SetTasks] = useState([
    {
      id: 1,
      text: 'Playing Games',
      day: 'Feb 5th at 9:30pm',
      reminder: false
    },
    {
      id: 2,
      text: 'Practice React Js',
      day: 'Feb 5th at 11:30pm',
      reminder: true
    },
  ])




  //add task

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    SetTasks([...tasks, newTask])
    console.log(tasks)
  }

  //delete Task func
  const deleteTask = (id) => {
    SetTasks(tasks.filter((task) => {
      return task.id !== id;
    }))
  }

  //toggle reminder
  const toggleReminder = (id) => {
    SetTasks(tasks.map((task) =>
      task.id === id ? {
        ...task, reminder: !task.reminder
      } : task))


  }



  return (
    <div className='container'>
      <Header onAdd={()=>setShowAddTask(!showAddTask)}   showAdd={showAddTask}  title={"Task Tracker"}    />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'Hknw dala!'}
    </div>
  )
}

export default App