import React from 'react'
import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {

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
      <Header title={"Task Tracker"} />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'Hknw dala!'}
    </div>
  )
}

export default App