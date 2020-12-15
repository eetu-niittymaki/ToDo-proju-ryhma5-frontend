import React, { Component } from "react"
import "../App.sass"

export default class Sorting extends Component {
  constructor(props){
    super(props)
    this.state = {
      sortedTodos: [],
      sort_task: true,
      sort_priority: true,
      sort_due_date: true,
      port: (process.env.PORT || 8080)
    }
  }

  sort = async (sort) => {
    const dynamicName = eval(`this.state.sort_${sort}`) // Evaluates string so it can be used as a concatenated dynamic variable name. 
    const method = (dynamicName) ? "asc" : "desc"       // Documentation says to never use eval() but I don't care.
    const sortObj = {}         
    const key = `sort_${sort}`  
    const value = !dynamicName 
    sortObj[key] = value   // Creates a new dynamic object for individual boolean state changes for the sorting buttons.
    let hr = await fetch(`http://localhost:${this.state.port}/todos?sort=${sort}&order_by=${method}&task=${this.props.search}`)
    let json = await hr.json()
    this.setState({ sortedTodos: json})
    this.setState(sortObj)
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
          onClick={() => this.sort("task")}
        > Task 
        </button>
        <button 
          type="button"
          className="sortBtn"
          onClick={() => this.sort("priority")}
        > Priority 
        </button>
        <button 
          type="button"
          className="sortBtn"
          onClick={() => this.sort("due_date")}
        > Due Date 
        </button>
      </div>
    )
  }
}