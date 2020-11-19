import React, { Component } from "react";
import PropTypes from "prop-types";
import "../App.css";

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: this.props.todo.completed ? "green" : "#fff",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
    };
  };

  markComplete = (e) => {
    console.log(this.props);
  };

  render() {
    const { id, title, priority, dueDate } = this.props.todo;
    return (
      <div className="todoItem" style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />{" "}
          {[title, ",  ", priority, ",  ", dueDate]}
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>
            x
          </button>
        </p>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todos: PropTypes.array.isRequired,
};

const btnStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 9px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right",
};

export default TodoItem;
