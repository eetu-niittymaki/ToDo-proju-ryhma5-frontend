import React, { Component } from 'react'

export class AddTodo extends Component {
  state = [
    { title: '', value: 0, error: '' },
    { priority: '', value: 0, error: '' },
    { dueDate: '', value: 0, error: ''},
  ]

  onSubmit = (e) => {
    e.preventDefault()
    this.props.addTodo([this.state.title.replace(/^\w/, (c) => c.toUpperCase()) + ', ', this.state.priority + ', ', this.state.dueDate])
    this.setState({ title: '',  priority: '', dueDate: '' })
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value })

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
        <input type="text" 
               name="title" 
               style={{ flex: '10', padding: '5px' }}
               placeholder="Add Todo..."
               value={this.state.title} 
               onChange={this.onChange}
               />
        <input type="number" 
               name="priority" 
               style={{ flex: '5', padding: '5px' }}
               placeholder="Priority"
               value={this.state.priority} 
               onChange={this.onChange}
               />
        <input type="date" 
               name="dueDate" 
               style={{ flex: '5', padding: '5px' }}
               placeholder="Due date"
               value={this.state.dueDate} 
               onChange={this.onChange}
               />
        <input type="submit"
               value="Submit"
               className="btn"
               style={{ flex: '1' }} />
      </form>
    )
  }
}

export default AddTodo
