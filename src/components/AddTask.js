import React, { Component } from "react";
import PropTypes from 'prop-types'
import axios from 'axios'

export class AddTask extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
      port: (process.env.PORT || 8080)
    };
}
  // POST Todo
  onSubmit = async e => {
    e.preventDefault();
    const {task, priority, due_date} = this.state 
    await axios.post(`http://localhost:${this.state.port}/todos`, {
      task: (task.replace(/^\w/, (c) => c.toUpperCase())),
      priority: priority,
      due_date: due_date,
      is_done: false
    })
    
    this.props.addTask([
      this.state.task.replace(/^\w/, (c) => c.toUpperCase()),
      this.state.priority,
      this.state.due_date,
      this.state.is_done
    ]);
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div className="addTodosContainer">
      <form
        id="todos"
        className="inputFields"
        onSubmit={this.onSubmit}
        // style={{ display: "flex", marginBottom: "20px" }}
      >
        <input
          className="inputTask"
          type="text"
          name="task"
          // style={{ flex: "10", padding: "5px" }}
          placeholder="Add Task..."
          value={this.state.task}
          onChange={this.onChange}
          required='required'
        />
        <input
          className="inputPriority"
          type="number"
          max="10"
          min="1"
          name="priority"
          //  style={{ flex: "5", padding: "5px" }}
          placeholder="Priority"
          value={this.state.priority}
          onChange={this.onChange}
          required='required'
        />
        <input
          className="inputDuedate"
          type="date"
          name="due_date"
          // style={{ flex: "5", padding: "5px" }}
          placeholder="Due date"
          value={this.state.due_date}
          onChange={this.onChange}
          required='required'
        />
        <button
          form="todos"
          type="submit"
          value="Submit"
          className="btn"
          style={{ float: "1" }}
        >Submit
        </button>
      </form>
      </div>
    );
  }
}

AddTask.propTypes = {
  addTask: PropTypes.func.isRequired
}

export default AddTask;