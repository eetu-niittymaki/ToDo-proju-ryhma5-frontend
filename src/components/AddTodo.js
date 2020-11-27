import React, { Component } from "react";
import PropTypes from 'prop-types'
import axios from 'axios'

export class AddTodo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      task: "",
      priority: "",
      due_date: "",
      is_done: "",
      port: (process.env.PORT || 8080)
    };
}
  // POST Todo
  onSubmit = (e) => {
    e.preventDefault();
    const {task, priority, due_date} = this.state 
    axios.post(`http://localhost:${this.state.port}/todos`, {
      task: (task.replace(/^\w/, (c) => c.toUpperCase())),
      priority: priority,
      due_date: due_date,
      is_done: false
    })
      .then(res => this.setState({ todos: [...this.state.todos, res.data] }))  
      .catch((error) => console.error(error))
      this.props.addTodo([
        this.state.task.replace(/^\w/, (c) => c.toUpperCase()),
        this.state.priority,
        this.state.due_date,
        this.state.is_done
        ]);
       this.setState({ task: "", priority: "", due_date: "", is_done: "" });
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <form
        onSubmit={this.onSubmit}
        style={{ display: "flex", marginBottom: "20px" }}
      >
        <input
          type="text"
          name="task"
          style={{ flex: "10", padding: "5px" }}
          placeholder="Add Todo..."
          value={this.state.task}
          onChange={this.onChange}
          required="required"
        />
        <input
          type="number"
          max="10"
          min="1"
          name="priority"
          style={{ flex: "5", padding: "5px" }}
          placeholder="Priority"
          value={this.state.priority}
          onChange={this.onChange}
          required="required"
        />
        <input
          type="date"
          name="due_date"
          style={{ flex: "5", padding: "5px" }}
          placeholder="Due date"
          value={this.state.due_date}
          onChange={this.onChange}
          required="required"
        />
        <input
          type="submit"
          value="Submit"
          className="btn"
          style={{ float: "1" }}
        />
      </form>
    );
  }
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default AddTodo;
