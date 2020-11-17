import './App.css';
import React, { Component } from 'react'
import Todos from './components/Todos.js'
import AddTodo from './components/AddTodo.js'
import Header from './components/layout/Header.js'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import About from './components/pages/About.js'

let id = 1

class App extends Component {
  state = {
    todos: [
      {
        id: id++,
        title: 'Do homework',
        priority: 1,
        dueDate: '20-11-2020',
        completed: false
      },
      {
        id: id++,
        title: 'Sleep, dream',
        priority: 4,
        dueDate: '20-11-2020',
        completed: false
      },
      {
        id: id++,
        title: 'Take out the garbage',
        priority: 5,
        dueDate: '20-11-2020',
        completed: false
      }
    ]
  }

  // Toggle Complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })})
  }
  
  // Delete ToDo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })
  }

  // Add Todo
  addTodo = (title, priority, dueDate) => {
    const newTodo = {
      id: id++,
      title: title,
      priority: priority,
      dueDate: dueDate,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
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
