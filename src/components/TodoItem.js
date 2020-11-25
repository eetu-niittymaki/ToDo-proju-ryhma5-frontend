import React, { Component } from "react";
import PropTypes from "prop-types";
import "../App.sass";

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: this.props.todo.completed ? "green" : "#fff",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
    };
  };

  componentDidMount = () => {
    console.log(this.props.todo);
  };

  render() {
    if (!this.props.todo) {
      return <div>Loading....</div>;
    }
    const { id, task, priority, due_date, completed } = this.props.todo;
    return (
      <div className="todoItem" style={this.getStyle()}>
        <div style={{ display: "flex" }}>
          <div>
            <input
              type="checkbox"
              defaultChecked={completed}
              onChange={this.props.markComplete.bind(this, id)}
            />
          </div>
          &nbsp;
          <div style={{ flex: 10 }}>{task}</div>
          <div style={{ flex: 5 }}>{priority}</div>
          <div style={{ flex: 5 }}>{due_date}</div>
          <div style={{ flex: 1 }}>
            <button
              onClick={this.props.delTodo.bind(this, id)}
              style={btnStyle}
            >
              x
            </button>
          </div>
        </div>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
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
