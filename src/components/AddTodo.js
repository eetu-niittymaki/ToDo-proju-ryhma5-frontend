import React, { Component } from "react";

export class AddTodo extends Component {
  state = [
    { title: "" },
    { priority: "" },
    { dueDate: "" },
  ];

  handleValidation () {
    let state = this.state
    let errors = {}
    let formIsValid = true

    if (!state.title) {
      formIsValid = false
      errors.title = 'Cannot be empty'
    }

    if (!state.priority) {
      formIsValid = false
      errors.priority= 'Cannot be empty'
    }

    if (!state.dueDate) {
      formIsValid = false
      errors.dueDate = 'Cannot be empty'
    }

    this.setState({errors: errors});
    return formIsValid
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (this.handleValidation()) {
      this.props.addTodo([
      this.state.title.replace(/^\w/, (c) => c.toUpperCase()) + ", ",
      this.state.priority + ", ",
      this.state.dueDate,
    ]);
    this.setState({ title: "", priority: "", dueDate: "" });
    } else {
      alert('Fields cannot be empty')
    }
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <form
        onSubmit={this.onSubmit}
        style={{ display: "flex", marginBottom: "20px" }}
      >
        <input
          type="text"
          name="title"
          style={{ flex: "10", padding: "5px" }}
          placeholder="Add Todo..."
          value={this.state.title}
          onChange={this.onChange}
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
        />
        <input
          type="date"
          name="dueDate"
          style={{ flex: "5", padding: "5px" }}
          placeholder="Due date"
          value={this.state.dueDate}
          onChange={this.onChange}
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

export default AddTodo;