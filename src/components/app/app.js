import React, { Component } from 'react';

import { NewTaskForm } from '../new-task-form';
import { TaskList } from '../task-list';
import { Footer } from '../footer';

import './app.css';


export class App extends Component {

  uniqId = 10;

  state = {
    data: [],
    filter: 'all',
    label: '',
  }

  createItemData = (description) => {
    
    return {
      description,
      status: 'active',
      id: this.uniqId++,
      createDate: new Date(),
    };
  }

  toggleProperty = (arr, id) => {
    const idx = arr.findIndex((item) => item.id === id);
    const changedObj = {...arr[idx]};

    changedObj.status = changedObj.status === 'active' ? 'completed' : 'active';

    return [
      ...arr.slice(0, idx),
      changedObj,
      ...arr.slice(idx + 1),
    ];
  }

  toggleStatus = (id) => {
    this.setState(( {data} ) => {

      return {
        data: this.toggleProperty(data, id),
      };
    });
  }

  deleteItem = (id) => {
    this.setState(( {data} ) => {
      const idx = data.findIndex((item) => item.id === id);

      return {
          data: [
            ...data.slice(0, idx),
            ...data.slice(idx + 1),
          ]
      };
    });
  }

  addItem = (label) => {
    if (label.trim()) {
      const newItem = this.createItemData(label);

      this.setState(( {data} ) => {
        
        return {
          data: [
            ...data,
            newItem,
          ],
        };
      });
    }
  }

  useFilteredTask = (evt) => {
    const filter = evt.target.innerText.toLowerCase();
    this.setState( {filter} );
  }

  getFilteredTasks = () => {
    const {data, filter} = this.state;

    switch (filter) {
      case 'active':
        return data.filter((item) => item.status === 'active');
      case 'completed':
        return data.filter((item) => item.status === 'completed');
      default:
        return data;
    }
  }

  useClearCompleted = () => {
    this.setState(( {data} ) => {

      return {data: data.filter((item) => item.status !== 'completed')};
    });
  }

  labelChange = (evt) => {
    this.setState( {label: evt.target.value} );
  }

  addItemFromForm = (evt) => {
    evt.preventDefault();
    this.addItem(this.state.label);
    this.setState( {label: ''} );
  }

  render() {
    
    const {filter} = this.state
    const todoCount = this.state.data.filter((item) => item.status === "active").length;
    const filteredTasks = this.getFilteredTasks();

    return (
      <section className='todoapp'>
        <NewTaskForm 
          addItemFromForm={this.addItemFromForm}
          labelChange={this.labelChange}
          label={this.state.label} />
        <section className='main'>
          <TaskList 
            tasks={filteredTasks}
            toggleStatus={this.toggleStatus}
            deleteItem={this.deleteItem} />
          <Footer 
            useFilteredTask={this.useFilteredTask}
            currentFilter={filter}
            useClearCompleted={this.useClearCompleted}
            todoCount={todoCount} />
        </section>
      </section>
    );
  }
}
