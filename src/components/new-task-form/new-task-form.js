import React from 'react';

import './new-task-form.css';


export const NewTaskForm = ( {addItemFromForm, labelChange, label} ) => {

  return (
    <form onSubmit={addItemFromForm}>
      <header className='header'>
        <h1>Todo App</h1>
        <input className='new-todo'
               placeholder='What needs to be done?'
               onChange={labelChange}
               value={label} />
      </header>
    </form>
  );
}
