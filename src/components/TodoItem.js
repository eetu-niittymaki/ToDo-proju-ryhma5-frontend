import React, { Component } from "react";
import PropTypes from "prop-types";
import "../App.css";

export class TodoItem extends Component {

  getStyle = () => {
    return {
      background: this.props.todo.is_done ? "green" : "#fff",
      textDecoration: this.props.todo.is_done ? "line-through" : "none",
    }
  }

  componentDidMount = () => {
    console.log(this.props.todo);
  }

  render() {
    if (!this.props.todo) {
      return <div>Loading....</div>
    }
    const { id, task, priority, due_date, is_done } = this.props.todo;
    return (
  
      <div className="todoItem" style={this.getStyle()}>
        <p style={{ display: "flex" }}>
          
            <input
              type="checkbox"
              defaultChecked={is_done}
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
    )
  }
}

TodoItem.propTypes = {
}
  markComplete: PropTypes.func.isRequired,
  todo: PropTypes.object.isRequired,
  delTodo: PropTypes.func.isRequired

const btnStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 9px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right",
}

export default TodoItem;
