import "./App.sass";
import React, { Component } from 'react'
import Todos from './components/Todos.js'
import AddTask from './components/AddTask.js'
import Header from './components/layout/Header.js'
// import Play from "./components/sounds/Play.js";
// import SoundEffect from "./components/sounds/SoundEffect.js";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import TodoCalendar from "./components/pages/TodoCalendar.js";
import Sorting from "./components/Sorting.js"
import Search from "./components/Search.js"
import DeleteCompleted from "./components/DeleteCompleted.js"
import axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
      date: "",
      search: "",
      port: (process.env.PORT || 8080),
    }
  }

  // GET all
  componentDidMount = async () => {
    let hr = await fetch(`http://localhost:${this.state.port}/todos?sort=timestamp&order_by=asc&task=${this.state.search}`)
    let json = await hr.json()
    this.setState({ todos: json })
    this.getDate()
  }

  // Toggle checked/unchecked
  updateIsDone = async id => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.is_done = !todo.is_done
        axios.put(`http://localhost:${this.state.port}/todos/${id}`, {
          is_done: todo.is_done
        })
      }
      return todo
    })})
  }

  // DELETE Task
  delTask = async id => {
    const del = window.confirm('Delete task?')
    if (del) {
     await axios.delete(`http://localhost:${this.state.port}/todos/${id}`) 
      . then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }))  
    }
  }

  // POST Task
  addTask = (task, priority, due_date) => {
    const newTodo = {
      task: task,
      priority: priority,
      due_date: due_date,
      is_done: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
    this.refresh() 
  }

  refresh = () => {
    window.location.reload()
  }

  getDate = () => {
    let today = new Date()
    let day = today.getDate()
    let month = today.getMonth()+1
    const year = today.getFullYear()
  
    if(day < 10) {
        day = '0' + day
    } 
  
    if(month < 10) {
        month = '0' + month 
    } 
  
    today = year + '-' + month + '-' + day
    this.setState({ date: today })
  }

  handleSorting = (sortedTodos) => {
    this.setState({ todos: sortedTodos })
  }

  handleDelete = (newTodos) => {
    this.setState({ todos: newTodos })
  }

  handleSearch = (filterTodos) => {
    this.setState({ todos: filterTodos })
  }
  
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
          <video src='/videos/video-1.mp4' autoPlay loop muted /> 
            <Header/>
            <DeleteCompleted
              todos={this.state.todos}
              search={this.state.search}
              handleDelete={this.handleDelete} />
            <Search 
              handleSearch={this.handleSearch}
               />
            <Sorting 
              search={this.state.search}
              handleSorting={this.handleSorting} />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTask 
                  addTask={this.addTask}
                  date={this.state.date} />
                <Todos 
                  todos={this.state.todos} 
                  updateIsDone={this.updateIsDone}
                  delTask={this.delTask} />
              </React.Fragment>
            )} />
           <Route
              component={() => <TodoCalendar todos={this.state.todos} />}
              path="/TodoCalendar"
            />
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
