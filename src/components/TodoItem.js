import React, { Component } from "react";
import PropTypes from "prop-types";
import { IconButton } from "@material-ui/core";
import DeleteOutlined from "@material-ui/icons/DeleteOutlined";
import Checkbox from '@material-ui/core/Checkbox';
import "../App.sass";

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
    const { id, task, priority, timestamp, due_date, is_done } = this.props.todo;
    return (
      <div className="todoItem" style={this.getStyle()}>
        <div className="checkbox">
            <Checkbox
              color="primary"
              defaultChecked={is_done}
              onChange={this.props.updateIsDone.bind(this, id)}
              inputProps={{ 'aria-label': 'primary checkbox' }}
            />
        </div>
          &nbsp;
          <div className="todoTask">{task}</div>
          <div className="todoPriority">{priority}</div>
          <div className="todoDuedate">Created: {timestamp} <br></br>Due date: {due_date}</div>
          <div className="todoButton">
            <IconButton aria-label="Delete Todo"
              onClick={this.props.delTask.bind(this, id)}
            >
              <DeleteOutlined/>
            </IconButton>
          </div>
        </div>
    )
  }
}

TodoItem.propTypes = {
  updateIsDone: PropTypes.func.isRequired,
  todo: PropTypes.object.isRequired,
  delTask: PropTypes.func.isRequired
}

export default TodoItem;
