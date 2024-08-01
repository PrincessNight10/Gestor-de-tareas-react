import {useContext, useRef,useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import { taskContext } from "../Context/Context"
import './NewTask.css'

export const NewTask = () => {

  const context = useContext(taskContext)
  
  const [titleTask, setTitleTask] = useState('')
  const [descriptionTask, setTDescriptionTask] = useState('')

  const txtTitle = useRef('')
const txtDescription = useRef('')
const handleTitleTask =(event) => setTitleTask(event.target.value)
const handleDescriptionTask =(event) => setTDescriptionTask(event.target.value)

const handleCreateTask = (event) => {
  event.preventDefault()
  const newTask = {
  id:uuidv4(),
  title: titleTask,
  description: descriptionTask,
  status: false
}
context.setTasks([...context.tasks,newTask])
context.setFilteredTasks([...context.tasks,newTask])

txtTitle.current.value = ''
txtDescription.current.value = ''

}

return (
  <div className='task-container'>
      <div className='circle'></div>
    <form className='frm-task'>
      <fieldset>
        <label>Titulo de la tarea</label>
        <input ref={txtTitle} onChange={handleTitleTask} id='txt-title' placeholder='Pon tu tarea aquí' type='text' />
      </fieldset>
      <fieldset>
        <label>Descripción de la tarea</label>
        <input ref={txtDescription} onChange={handleDescriptionTask} id='txt-description' placeholder='Descripción de la tarea' type='text' />
      </fieldset>
      <button onClick={handleCreateTask} className='btn-new-task'>Crear nueva tarea</button>
    </form>
  </div>
);
};