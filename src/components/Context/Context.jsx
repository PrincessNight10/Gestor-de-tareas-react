import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

 
export const taskContext = createContext()

const tsk = [
{id:uuidv4 (), title:'Leer', description: 'El libro de la selva', status: true },
{id:uuidv4 (), title:'Partido', description: 'Barcelona vs real madrid', status: true },
{id:uuidv4 (), title:'Revisar', description: 'El espectador', status: false }

]



export const TasksProvider = ({children}) => {

  const [tasks, setTasks] = useState(tsk)
  const [filteredTasks, setFilteredTasks] = useState(tsk)
  const [pendingTasks, setPendingTasks] = useState(0)
  const [doneTasks, setDoneTasks] = useState(0)


  //funcion para actualizar el estado de una tarea
  const updateTaskStatus = (taskId, newStatus) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };
  
  
  return(
 <taskContext.Provider value={{
  tasks,
  setTasks,
  pendingTasks,
  setPendingTasks,
  doneTasks,
  setDoneTasks,
  updateTaskStatus,
  filteredTasks,
  setFilteredTasks, 

 }}> 
{children}
 </taskContext.Provider>
  )

}
