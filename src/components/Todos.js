import React, { Component } from 'react'
import TodoItem from './TodoItem.js'
import PropTypes from 'prop-types'

class Todos extends Component {
  render() {
    if (this.props.todos.length === 0) {
      return <div className = "todosPlaceholder">No Tasks</div>
    }
    return this.props.todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} updateIsDone=
      {this.props.updateIsDone} delTask={this.props.delTask}/>
    ))
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  updateIsDone: PropTypes.func.isRequired,
  delTask: PropTypes.func.isRequired
}

export default Todos;
