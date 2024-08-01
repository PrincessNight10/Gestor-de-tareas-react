import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

 
export const taskContext = createContext()

const tsk = [
  {id: uuidv4(), title: 'Tarea 1',description:'Descripcion 1', status: false},
  {id: uuidv4(), title: 'tarea 2',description:'Descripcion 2', status: false },
  {id: uuidv4(), title: 'tarea 3', description:'Descripcion 3', status: true }

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
