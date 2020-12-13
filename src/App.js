import "./App.sass";
import React, { Component } from 'react'
import Todos from './components/Todos.js'
import AddTask from './components/AddTask.js'
import Header from './components/layout/Header.js'
// import Play from "./components/sounds/Play.js";
import SoundEffect from "./components/sounds/SoundEffect.js";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import TodoCalendar from "./components/pages/TodoCalendar.js";
import Sorting from "./components/Sorting.js"
import DeleteCompleted from "./components/DeleteCompleted.js"
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
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

  refresh = () => {
    window.location.reload()
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

  handleSorting = (sortedTodos) => {
    this.setState({ todos: sortedTodos })
  }

  handleDelete = (newTodos) => {
    this.setState({ todos: newTodos })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
          <video src='/videos/video-1.mp4' autoPlay loop muted /> 
            <SoundEffect />
            <Header/>
            <DeleteCompleted
              todos={this.state.todos} 
              handleDelete={this.handleDelete}
              />
            <Sorting 
              handleSorting={this.handleSorting}/>
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
