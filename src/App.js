import "./App.sass";
import React, { Component } from 'react'
import Todos from './components/Todos.js'
import AddTask from './components/AddTask.js'
import Header from './components/layout/Header.js'
//import Play from "./components/sounds/Play.js";
import SoundEffect from "./components/sounds/SoundEffect.js";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import TodoCalendar from "./components/pages/TodoCalendar.js";
import axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
      sortTask: true,
      sortPriority: true,
      sortDueDate: true,
      port: (process.env.PORT || 8080)
    }
  }

  // GET all
  async componentDidMount() {
    let hr = await fetch(`http://localhost:${this.state.port}/todos?sort=timestamp&order_by=asc`)
    let json = await hr.json()
    this.setState({ todos: json })
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
    try {
    await axios.delete(`http://localhost:${this.state.port}/todos/${id}`) 
      .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }))
    } catch (err) {}  
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
  }

  // Sort by Task
  sortTask = async () => {
    let method = (this.state.sortTask) ? "asc" : "desc"
    let hr = await fetch(`http://localhost:${this.state.port}/todos?sort=task&order_by=${method}`)
    let json = await hr.json()
    this.setState({ todos: json, sortTask: !this.state.sortTask })
  }

  // Sort by Priority
  sortPriority = async () => {
    let method = (this.state.sortPriority) ? "asc" : "desc"
    let hr = await fetch(`http://localhost:${this.state.port}/todos?sort=priority&order_by=${method}`)
    let json = await hr.json()
    this.setState({ todos: json, sortPriority: !this.state.sortPriority })
  }

  // Sort by Due Date
  sortDueDate = async () => {
    let method = (this.state.sortDueDate) ? "asc" : "desc"
    let hr = await fetch(`http://localhost:${this.state.port}/todos?sort=due_date&order_by=${method}`)
    let json = await hr.json()
    this.setState({ todos: json, sortDueDate: !this.state.sortDueDate })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
          <video src='/videos/video-1.mp4' autoPlay loop muted /> 
            <SoundEffect />
            <Header/>
            <div className="sortContainer">Sort By: 
              <button 
                type="button"
                className="sortBtn"
                value="Submit"
                onClick={this.sortTask}
              > Task 
              </button>
              <button 
                type="button"
                className="sortBtn"
                value="Submit"
                onClick={this.sortPriority}
              > Priority 
              </button>
              <button 
               type="button"
                className="sortBtn"
                value="Submit"
                onClick={this.sortDueDate}
              > Due Date 
              </button>
            </div>
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTask addTask={this.addTask}/>
                <Todos 
                  todos={this.state.todos} 
                  updateIsDone={this.updateIsDone}
                  delTask={this.delTask}/>
              </React.Fragment>
            )} />
            <Route path="/TodoCalendar" component={TodoCalendar} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
