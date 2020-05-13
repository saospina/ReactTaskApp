import React, { Component } from 'react';
import { Task } from './Task';



class Tasks extends Component {
    
    render() {
        return (
            this.props.tasks.map( task => 
                <Task
                key={task.id} 
                task={task}
                deleteTask={this.props.deleteTask}>

                </Task>
            )
                
            

            
        );
    }
}

export default Tasks;