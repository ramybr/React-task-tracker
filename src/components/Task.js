import { FaTimes, FaBell } from 'react-icons/fa'



const Task = ({ task, onDelete, onToggle }) => {
    return (
         <div className={`task ${ task.reminder ? 'reminder' : '' }`}> 
         <h3>{task.text} <div className="logos"> <FaBell className={`fa-bell ${task.reminder ? 'activated' : ''}`} onClick={() => onToggle(task.id)} />
         <FaTimes style={{color:'#9d0208', marginLeft:'1rem', cursor:'pointer'}} onClick={() => onDelete(task.id)} /></div>
         </h3>
         <p>{task.date}</p>
         </div>
    )
}

export default Task