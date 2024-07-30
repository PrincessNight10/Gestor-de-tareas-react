import React, {Children, useContext, useState} from 'react'
import { Header } from '../../Layouts/Header/Header'
import {Main} from '../../Layouts/Main/Main'
import { ContainerTasks } from '../../Layouts/ContainerTasks/ContainerTasks';
import { ItemTask } from '../../ItemTask/ItemTask';
import { TasksProvider, taskContext } from '../../Context/Context';

export const Home = () => {

  const context= useContext(taskContext)

  return (
    <>
<header>
  <h1> Gestor de tareas</h1>
  </header>   
  
  <Main>
    <ul> 
    <ContainerTasks>
      {
             context.filteredTasks.map(task => <ItemTask idTask={task.id} content={task.description} titleTask={task.title} />)

      }
</ContainerTasks>
    
    </ul>
    </Main> 
    </>
  )
}

