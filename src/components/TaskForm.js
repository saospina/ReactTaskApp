import React, { Component } from 'react'

export default class TaskForm extends Component {

    state = {
        title: '',
        description: ''
    }

    onSubmit = (e) => {
        this.props.addTask(this.state.title, this.state.description);
        e.preventDefault()

    }

    getInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }
    render() {
        
        
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        name="title"
                        placeholder="Write a task"
                        onChange={this.getInput}
                        value={this.state.title}
                    >

                    </input>
                    <br />
                    <br />
                    <textarea
                        name="description"
                        placeholder="Write a description"
                        onChange={this.getInput}
                        value={this.state.description}
                    >
                    </textarea>
                    <button type="submit">
                        Save a task

                    </button>
                </form>
            </div>
        )
    }
}

