import React, {Children, useContext, useState} from 'react'
import { Header } from '../../Layouts/Header/Header'
import {Main} from '../../Layouts/Main/Main'
import { ContainerTasks } from '../../Layouts/ContainerTasks/ContainerTasks';
import { ItemTask } from '../../ItemTask/ItemTask';
import { NewTask } from '../../NewTask/NewTask';
import { taskcontext } from '../../Context/Context';
export const Home = () => {
  const context= useContext(taskcontext)

  return (
    <>
<header>
  <h1> Gestor de tareas</h1>
  </header>   
  <NewTask/>
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

