import { useContext, useEffect, useState } from "react";
import './infoTasks.css'
import {taskContext} from '../../Context/Context'

export const InfoTasks =() => {

  const context = useContext(taskContext)

  useEffect(() => {
     let pending = context.tasks.filter (tasks => tasks.status === false)
     let resolve = context.tasks.filter (tasks => tasks.status === true)

    context.setPendingTasks(pending.length)
    context.setDoneTasks(resolve.length)

    }, [context.tasks])
  return(
    <>
    <h2 className='info-tasks'> usted tiene <span className='task-pending'>{context.pendingTasks}</span> pedientes y <span className='task-done'> {context.doneTasks} Terminadas</span></h2>
    <hr />
    </>
  )
}