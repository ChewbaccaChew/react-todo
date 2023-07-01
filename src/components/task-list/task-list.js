import React from 'react';

import { TaskItem } from '../task';

import './task-list.css';


export const TaskList = ( {tasks, toggleStatus, deleteItem} ) => {

  const elements = tasks.map((item) => {
    const {id, ...itemsProps} = item;

    return (
      <li key={id} className={item.status}>
        <TaskItem {...itemsProps}
          toggleStatus={() => toggleStatus(id)}
          deleteItem={() => deleteItem(id)}
          />
      </li>
    );
  });

  return (
    <ul className='todo-list'>
      {elements}
    </ul>
  );
}
