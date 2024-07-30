import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const taskContext = createContext()
const tsk = [
  {id: uuidv4(), title: 'Tarea 1',description:'Descripcion 1', status: false},
  {id: uuidv4(), title: 'tarea 2',description:'Descripcion 2', status: true },
  {id: uuidv4(), title: 'tarea 3', description:'Descripcion 3', status: true }

]

export const TasksProvider = ({children}) => {
  const [tasks,setTasks] = useState(tsk)
  const [filteredTasks, setfilteredTasks] = useState(tsk)
  
  //funcion oara actualizar estado de una tarea
  const updateTasksStatus = (tasksid, newStatus) =>{
    setTasks(prevTasks =>
      prevTasks.map(task =>
        taskContext.id === taskid ?{...task, status: newStatus} : task
      )
    )

  }
  return (
  <taskContext.Provider value ={{
  tasks,
  setTasks,
  filteredTasks,
  setfilteredTasks
  }}>
          {children}
  
  </taskContext.Provider>)  
}
