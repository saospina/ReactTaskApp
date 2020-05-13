import React, { Component } from 'react';
import Proptypes from 'prop-types';
import './Task.css'



export class Task extends Component {

    styleCompleted() {
        return {
            fontSize: '20px',
            color: this.props.task.done ? 'gray' : 'black',
            textDecoration: this.props.task.done ? 'line-through' : 'none'

        }
    }

    render() {

        const { task } = this.props;
        return (

            <div style={this.styleCompleted()}>

                {task.title} -
                {task.description} -
                {task.done} -
                {task.id}

                <input type="checkbox">

                </input>

                <button style={btnDelete}>
                    x
                    </button>

            </div>

        )
    }

    

}

Task.propTypes = {
    task: Proptypes.object.isRequired
}


const btnDelete = {
    fontSize: '18px',
    color: 'fff',
    border: '2px solid Tomato',
    padding: '10px 15px',
    borderRadius: '50%',
    cursor: 'pointer'

}

export default Task
