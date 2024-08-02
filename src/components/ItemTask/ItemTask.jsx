import { useContext } from "react"
import { taskContext } from "../Context/Context"
import './ItemTask.css'

export const ItemTask =({idTask,content, titleTask}) => {
  
  const {tasks, updateTaskStatus} = useContext(taskContext)
  
  const task = tasks.find(task => task.id === idTask)
  
  const handleCheckboxChange=() => {
    //actualizamos el estado de la tarea
    updateTaskStatus(idTask, !task.status);
  }
  return (
    <li id={idTask} className={task.status ? 'item-task checked' : 'item-task'}>
      <div className={task.status ? 'circle-state circle-green-mint' : 'circle-state'}></div>
      <h2 className={task.status ? 'checked' : ''}>{titleTask}</h2>
      <p className={task.status ? 'checked' : ''}>{content}</p>
      <input type="checkbox" checked={task.status} onChange={handleCheckboxChange} />
    </li>
  );
}  