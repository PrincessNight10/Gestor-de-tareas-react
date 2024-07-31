import { useContext } from 'react';
import './ItemTask.css';
import { taskcontext } from '../Context/Context';

export const ItemTask = ({ idTask, content, titleTask }) => {
  const {tasks,   updateTasksStatus } = useContext(taskcontext)
  
  const task = tasks.find( task =>task.id === idTask)
  
  
  const handleCheckboxChange = () => {
    //actualizar estado tarea
    updateTasksStatus(idTask, !task.status)
  }
  return (
    <li 
    id={idTask} className={task.status ? "item-task checked" : "item-task"}
    >
      <div className={task.status ? "circle-state circle-green-mint" : "circle-state"}>
    
      </div>
      <h2>{titleTask}</h2>
      <p>{content}</p>
      <input type="Checkbox" 
      checked={task.status}
      onChange={handleCheckboxChange}/>
          </li>
  );
};
