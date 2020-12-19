import React, { Component } from "react"
import "../App.sass"
import axios from "axios"

export default class DeleteCompleted extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newTodos: [],
      port: (process.env.PORT || 8080)
    }
  }

  deleteCompleted = async () => {
    const del = window.confirm("Delete completed tasks?")
    if (del) {
      await axios.delete(`http://localhost:${this.state.port}/todos`)
      const res = await fetch(`http://localhost:${this.state.port}/todos?sort=timestamp&order_by=asc&task=${this.props.search}`)
      const json = await res.json()
      this.setState({ newTodos: json })
      this.handleDelete()
    }
  }
  
  handleDelete = () => {
    this.props.handleDelete(this.state.newTodos)
  }

  render() {
    const result = this.props.todos.filter(task => task.is_done === 1)
    console.log(result)
    return(
      <button
        className="deleteBtn"
        type="button"
        onClick={this.deleteCompleted}
        disabled={!result.length}
        >
        Delete Completed
      </button>
    )
  }
}