import "./App.sass";
import React, { Component } from "react";
import Todos from "./components/Todos.js";
import AddTodo from "./components/AddTodo.js";
import Header from "./components/layout/Header.js";
import About from "./components/pages/About.js";
import Play from "./components/sounds/Play.js";
import SoundEffect from "./components/sounds/SoundEffect.js";
// import Pagination from "./components/Paginate.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TodoCalendar from "./components/pages/TodoCalendar.js";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      port: process.env.PORT || 8080,
      //  currentPage: 1,
      //  todosPerPage: 5,
    };
  }

  // GET all
  async componentDidMount() {
    let hr = await fetch(`http://localhost:${this.state.port}/todos/`);
    let json = await hr.json();
    this.setState({ todos: json });
  }

  // Toggle Complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.is_done = !todo.is_done;
          console.log(this.state.todos[id - 1].is_done);
          axios.put(`http://localhost:${this.state.port}/todos/${id}`, {
            is_done: this.state.todos[id - 1].is_done,
          });
        }
        return todo;
      }),
    });
  };

  // DELETE ToDo
  delTodo = async (id) => {
    await axios
      .delete(`http://localhost:${this.state.port}/todos/${id}`)
      .then((res) =>
        this.setState({
          todos: [...this.state.todos.filter((todo) => todo.id !== id)],
        })
      );
  };

  // POST Todo
  addTodo = (task, priority, due_date) => {
    const newTodo = {
      task: task,
      priority: priority,
      due_date: due_date,
      is_done: false,
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  /* indexes = () => {
    const indexOfLastTodo = this.state.currentPage * this.state.todosPerPage;
    const indexOfFirstTodo = this.indexOfLastTodo - this.state.todosPerPage;
    const currentTodos = this.state.todos.slice(
      indexOfFirstTodo,
      indexOfLastTodo
    );
    return currentTodos;
  }; */

  /* paginate = (pageNumber) => {
    if (pageNumber !== this.state.currentPage) {
      console.log(pageNumber);
      this.setState({ currentPage: pageNumber });
      console.log(this.state.currentPage);
    }
  }; */

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <video src="/videos/video-1.mp4" autoPlay loop muted />
            <Play />
            <SoundEffect />
            <Header />
            <Route
              exact
              path="/"
              render={(props) => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos
                    todos={/*this.indexes()*/ this.state.todos}
                    markComplete={this.markComplete}
                    delTodo={this.delTodo}
                  />
                  {/* <Pagination
                    todosPerPage={this.state.todosPerPage}
                    totalTodos={this.state.todos.length}
                    paginate={this.paginate}
                    currentPages={this.state.currentPage}
                  /> */}
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
            <Route
              path="/TodoCalendar"
              component={() => <TodoCalendar todos={this.state.todos} />}
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
