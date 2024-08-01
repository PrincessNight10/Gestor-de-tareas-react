import React, { useContext } from 'react';
import './FilterTasks.css';
import { taskContext } from '../Context/Context'; 

export const FilterTasks = () => {
  const context = useContext(taskContext);

  const handleFilters = (event) => {
    const currentOption = event.target.value;
    console.log(currentOption);
    
    if (currentOption === 'Pendientes') {
      context.setFilteredTasks(context.tasks.filter(task => !task.status));
    } else if (currentOption === 'Realizadas') {
      context.setFilteredTasks(context.tasks.filter(task => task.status));
    } else {
      context.setFilteredTasks(context.tasks);
    }
  };

  return (
    <div className='container-filters'>
      <label> Filtrar por</label>
      <select onChange={handleFilters}>
        <option value="Todos" className='opt opt1'>Todos</option>
        <option value="Pendientes" className='opt opt2'>Pendientes</option>
        <option value="Realizadas" className='opt opt3'>Realizadas</option>
      </select>
    </div>
  );
};

