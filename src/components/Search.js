import React, { Component } from 'react';
import "../App.sass";

export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      task: "",
      filterTodos: "",
      loading: false,
      port: (process.env.PORT || 8080),
    }
  }

  search = async (val) => {
    this.setState({ loading: true})
    const res = await fetch(`http://localhost:${this.state.port}/todos?sort=timestamp&order_by=asc&task=${val}`)
    const json = await res.json()
    this.setState({filterTodos: json, loading: false})
    this.handleSearch()
  } 

  handleChange = async (e) => {
    this.search(e.target.value)
    this.setState({task: e.target.value})
  }

  handleSearch = () => {
    this.props.handleSearch(this.state.filterTodos)
  }

  render() {
    return ( 
      <div>
        <input 
          className="searchButton" 
          value={this.state.task}
          onChange={this.handleChange}
          placeholder="Search Task" />
      </div>
    )
  }
}