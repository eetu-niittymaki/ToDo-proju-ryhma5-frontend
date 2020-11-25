import React, { Component } from "react";
import PropTypes from "prop-types";
import "../App.sass";

export class TodoItem extends Component {
  state = { title: "", priority: "", dueDate: "" };

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
        <p style={{ display: "flex" }}>
          <div>
            <input
              type="checkbox"
              onChange={this.props.markComplete.bind(this, id)}
            />
          </div>
          <div style={{ flex: 10 }}>&nbsp;{title}</div>
          <div style={{ flex: 5 }}>{priority}</div>
          <div style={{ flex: 5 }}>{dueDate}</div>
          <div style={{ flex: 1 }}>
            <button
              onClick={this.props.delTodo.bind(this, id)}
              style={btnStyle}
            >
              x
            </button>
          </div>
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
