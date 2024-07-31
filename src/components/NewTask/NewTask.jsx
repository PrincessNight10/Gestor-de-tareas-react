import { v4 as uuidv4 } from 'uuid';
import './NewTask.css'
import { useContext, useRef, useState } from 'react';
import { taskcontext } from '../Context/Context';

export const NewTask = () => {
  const context = useContext(taskcontext)

  const {titleTask,setTitleTask} =useState('')
  const {descriptionTask,setDescriptionTask} =useState('')


  const txtTitle =useRef('')
  const txtdescription = useRef('')

  const  handleTitleTask = (event) => setTitleTask(event.target.value)
  const  handleDescriptionTask = (event) => setDescriptionTask(event.target.value)

  const handlecreateTask = (event) => {
    event.preeventDefault()
    const newTask ={
      id: uuidv4,
      title: titleTask,
      description: descriptionTask,
      status: false
    }

    context.setTasks([...context.tasks, newTask])
    context.filteredTasks([...context.tasks,newTask])
txtTitle.current.value = ''
txtdescription.current.value = ''
  }

  return (
  <form className='frm-task'>
    <fieldset>
      <label >Titulo Tarea</label>
    </fieldset>
    <fieldset>
    <input ref={txtTitle} onChange={handleTitleTask} id='txt-title' placeholder ='ej: crear una actividad dinamica' type='t' />
  <label> descripción tarea</label>
  <input ref={txtdescription} onChange={handleDescriptionTask} id='txt-descriptiom' placeholder ='ej: actividad 1' type='t' />
  </fieldset>
  <button onClick={handlecreateTask} className='btn-new-task'>Crear nueva tarea </button>
  </form>)
}
