import React, { Component } from 'react';
import './App.css';
import tasks from './sample/task.json';
// Components
import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm';





class App extends Component {

  state = {
    tasks: tasks
  }

  addTask = (title, description) => {
    const newTask = {
      title: title,
      description: description,
      id: this.state.tasks.length
    }

    // check this before
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })


  }

  deleteTask = (id) => {
    const newTasks = this.state.tasks.filter(task => task.id !== id);
    this.setState({tasks: newTasks})

  }

  checkDone = () => {

  }

  render() {
    return (
      <div>
        <TaskForm
          addTask={this.addTask}>

        </TaskForm>
        <Tasks
          tasks={this.state.tasks}
          deleteTask={this.deleteTask}
        />
      </div>
    )
  }

}

export default App;
