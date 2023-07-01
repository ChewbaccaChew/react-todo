import React from 'react';
import { formatDistanceToNow } from 'date-fns';

import './task.css';


export const TaskItem = ( {description, status, toggleStatus,
                            deleteItem, createDate} ) => {

  return (
    <>
      <div className='view'>
        <input className='toggle'
          type='checkbox'
          onClick={toggleStatus}
          defaultChecked={status !== 'active'} />
        <label>
          <span className='description'>{description}</span>
          <span className='created'>
            created {formatDistanceToNow(createDate, {includeSeconds: true})} ago
          </span>
        </label>
        <button className='icon icon-edit'></button>
        <button className='icon icon-destroy'
                onClick={deleteItem}></button>
      </div>
      {
      status === 'editing'
        ? <input className='edit' type='text' value='Editing task' />
        : null
      }
    </>
  );
}

TaskItem.defaultProps = {
  status: 'defaultStatus',
  description: 'defaultDescription',
  toggleStatus: () => {},
}

TaskItem.propTypes = {
  status: (props, propName, componentName) => {
    const value = props[propName];

    if (typeof(value) === 'string') {
      return null;
    }

    return new TypeError(`${componentName}: ${propName} must be string`);
  }
}
