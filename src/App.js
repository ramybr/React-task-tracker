import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

import { useState } from 'react'






function App() {

  const [tasks, setTasks] = useState([
    // {
    //   id: 1,
    //   text: `Doctor's Appointment`,
    //   date : `Friday 03 June 2022`,
    //   reminder : false
    // },
  
    // {
    //   id: 2,
    //   text: `Meeting at work`,
    //   date : `Monday 06 June 2022`,
    //   reminder : false
    // },
  
    // {
    //   id: 3,
    //   text: `Gym Membership`,
    //   date : `Thursday 09 August 2022`,
    //   reminder : false
    // }
  ])


  const [showAdd, setShowAdd] = useState(false)


const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = {id, ...task}
setTasks([...tasks, newTask])
 
}



  const deleteTask = (id) => {
    
setTasks(tasks.filter((task) => task.id !== id
))
  }


  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder : !task.reminder} : task))
  }
  


  return (
    <div className="container">
     <Header onAdd={() => setShowAdd(!showAdd)} showAdd={showAdd} /> 
     {showAdd && <AddTask onAdd={addTask} />}
     { tasks.length > 0 ? (
     <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
     ) : (
       `No Tasks To Show`
     ) }
    </div>
  );
}

export default App;
