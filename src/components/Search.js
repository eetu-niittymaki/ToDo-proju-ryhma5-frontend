import React, { Component } from 'react';
import "../App.sass";

export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      task: "",
      filterTodos: "",
      port: (process.env.PORT || 8080),
    }
  } 
  // Gets searched value from DB
  search = async (val) => {
    const res = await fetch(`http://localhost:${this.state.port}/todos?sort=timestamp&order_by=asc&task=${val}`)
    const json = await res.json()
    this.setState({ filterTodos: json })
    this.handleSearch()
  } 
  // Sends onChange value forward to search()
  handleChange = async (e) => {
    this.search(e.target.value)
    this.setState({ task: e.target.value })
  }

  // Sends value forward to handle function in App.js
  handleSearch = () => {
    this.props.handleSearch(this.state.filterTodos)
  }

  render() {
    return ( 
      <div>
        <input 
          className="searchInput"
          value={this.state.task}
          onChange={this.handleChange}
          placeholder="Search Task" />
      </div>
    )
  }
}