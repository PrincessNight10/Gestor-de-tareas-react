import React, {useState} from 'react'
import { Header } from '../../Layouts/Header/Header'
import {Main} from '../../Layouts/Main/Main'
import { v4 as uuidv4 } from 'uuid';
import { ContainerTasks } from '../../Layouts/ContainerTasks/ContainerTasks';
import { ItemTask } from '../../ItemTask/ItemTask';
const tsk = [ 
  {id: uuidv4(), title: 'Tarea 1',description:'Descripcion 1', status: false},
  {id: uuidv4(), title: 'tarea 2',description:'Descripcion 1', status: true },
  {id: uuidv4(), title: 'tarea 3', description:'Descripcion 1', status: true }

]
export const Home = () => {
  const [ tasks, setTasks] = useState(tsk) 

  
  return (
    <>
<header>
  <h1> Gestor de tareas</h1>
  </header>   
  
  <Main>
    <ul> 
    <ContainerTasks>
      {
              tasks.map(task => <ItemTask idTask={task.id} content={task.description} titleTask={task.title} />)

      }
</ContainerTasks>
    
    </ul>
    </Main> 
    </>
  )
}

