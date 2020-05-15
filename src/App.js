// Components
import React, { Component } from 'react';
import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm';
import PostsService from './components/PostsService';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// css
import './App.css';
import tasks from './sample/task.json';





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
    this.setState({ tasks: newTasks })

  }

  checkDone = (id) => {
    const newTasks = this.state.tasks.map(task => {
      if (task.id === id) {
        task.done = !task.done
      }
      return task;
    });
    this.setState({ tasks: newTasks });

  }

  render() {
    return (
      <div>
        <Router>

          <Link to="/">Home</Link>

          <br></br>

          <Link to="/post">Post</Link>
          <Route
            exact path="/"
            render={() => {
              return <div>
                <TaskForm
                  addTask={this.addTask}>

                </TaskForm>
                <Tasks
                  tasks={this.state.tasks}
                  deleteTask={this.deleteTask}
                  checkDone={this.checkDone}
                />
              </div>

            }}>

          </Route>
          <Route
            path="/post"
            component={PostsService}>

          </Route>
        </Router>

      </div>
    )
  }

}

export default App;
