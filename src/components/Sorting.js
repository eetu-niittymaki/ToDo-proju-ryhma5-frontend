import React, { Component } from "react"
import "../App.sass"

export default class Sorting extends Component {
  constructor(props){
    super(props)
    this.state = {
      sortedTodos: [],
      sortTask: true,
      sortPriority: true,
      sortDueDate: true,
      port: (process.env.PORT || 8080)
    }
  }

  // Sort by Task
  sortTask = async () => {
    let method = (this.state.sortTask) ? "asc" : "desc"
    let hr = await fetch(`http://localhost:${this.state.port}/todos?sort=task&order_by=${method}`)
    let json = await hr.json()
    this.setState({ sortedTodos: json, sortTask: !this.state.sortTask })
    this.handleSorting()
  }

  // Sort by Priority
  sortPriority = async () => {
    let method = (this.state.sortPriority) ? "asc" : "desc"
    let hr = await fetch(`http://localhost:${this.state.port}/todos?sort=priority&order_by=${method}`)
    let json = await hr.json()
    this.setState({ sortedTodos: json, sortPriority: !this.state.sortPriority })
    this.handleSorting()
  }

  // Sort by Due Date
  sortDueDate = async () => {
    let method = (this.state.sortDueDate) ? "asc" : "desc"
    let hr = await fetch(`http://localhost:${this.state.port}/todos?sort=due_date&order_by=${method}`)
    let json = await hr.json()
    this.setState({ sortedTodos: json, sortDueDate: !this.state.sortDueDate })
    this.handleSorting()
  }

  handleSorting = () => {
    this.props.handleSorting(this.state.sortedTodos)
  }

  render() {
    return(
      <div className="sortContainer">Sort By: 
        <button 
          type="button"
          className="sortBtn"
          onClick={this.sortTask}
        > Task 
        </button>
        <button 
          type="button"
          className="sortBtn"
          onClick={this.sortPriority}
        > Priority 
        </button>
        <button 
          type="button"
          className="sortBtn"
          onClick={this.sortDueDate}
        > Due Date 
        </button>
      </div>
    )
  }
}