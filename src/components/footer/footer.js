import React from 'react';

import { TasksFilter } from '../tasks-filter';

import './footer.css';


export const Footer = ( {useFilteredTask , currentFilter,
                          useClearCompleted, todoCount} ) => {
  
  return (
    <footer className='footer'>
      <span className='todo-count'>{todoCount} items left</span>
      <TasksFilter useFilteredTask={useFilteredTask}
                   currentFilter={currentFilter} />
      <button className='clear-completed'
              onClick={useClearCompleted}>Clear completed</button>
    </footer>
  );
}
