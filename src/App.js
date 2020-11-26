import './App.css';
import React, { Component } from 'react'
import Todos from './components/Todos.js'
import AddTodo from './components/AddTodo.js'
import Header from './components/layout/Header.js'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import About from './components/pages/About.js'
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
    let hr = await fetch(`http://localhost:${this.state.port}/todos/`)
    let json = await hr.json()
    this.setState({ todos: json })
  }

  // Toggle Complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.is_done = !todo.is_done
      }
      return todo
    })})
  }
  // https://jsonplaceholder.typicode.com/todos/
  // DELETE ToDo
  delTodo = (id) => {
    axios.delete(`http://localhost:${this.state.port}/todos/${id}`) 
      .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }))
  }

  // POST Todo
  addTodo = (task, priority, due_date) => {
    const newTodo = {
      task: task,
      priority: priority,
      due_date: due_date,
      is_done: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] }) 
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
          <video src='/videos/video-1.mp4' autoPlay loop muted /> 
            <Header/>
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo}/>
                <Todos todos={this.state.todos} markComplete={this.markComplete}
                  delTodo={this.delTodo}/>
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
