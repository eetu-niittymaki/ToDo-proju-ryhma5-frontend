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
    const del = window.confirm("Delete completed tasks?") // If user accepts sends DELETE request to backend
    if (del) {
      await axios.delete(`http://localhost:${this.state.port}/todos`)
      const res = await fetch(`http://localhost:${this.state.port}/todos?sort=timestamp&order_by=asc&task=${this.props.search}`)
      const json = await res.json()
      this.setState({ newTodos: json })
      this.handleDelete()
    }
  }
  
  // Sends value forward to handle function in App.js
  handleDelete = () => {
    this.props.handleDelete(this.state.newTodos)
  }

  render() {
    return(
      <button
        className="deleteBtn"
        type="button"
        onClick={this.deleteCompleted}
        >
        Delete Completed
      </button>
    )
  }
}