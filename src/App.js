import "./App.sass";
import React, { Component } from "react";
import Search from "./components/Search.js";
import Todos from "./components/Todos.js";
import AddTask from './components/AddTask.js'
import Header from "./components/layout/Header.js";
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
      // result: [],
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
    this.setState({ todos: [...this.state.todos, newTodo] }) 
  }
  
  
  }; */

  search = (task, input) => {
    const result = [];
    console.log(task.join(" "));
    if (input !== "") {
      axios.get(`http://localhost:${this.state.port}/todos/`).then((res) =>
        res.data.map((todo) => {
          if (todo.task === task.join(" ")) {
            result.push(todo);
            this.setState({ todos: result });
            result.length = 0;
          } /* else if (input.length > 1 && ) {
            this.setState({ todos: [] });
          } */
        })
      );
    } else {
      axios.get(`http://localhost:${this.state.port}/todos/`).then((res) => {
        this.setState({ todos: res.data });
      }, []);
    }
  };

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
              path="/"
              exact
              render={(props) => (
                <React.Fragment>
                  <Search todos={this.state.todos} search1={this.search} />
                <AddTask addTask={this.addTask}/>
                <Todos 
                  todos={this.state.todos} 
                  updateIsDone={this.updateIsDone}
                  delTask={this.delTask}/>
                  {/* <Pagination
                    todosPerPage={this.state.todosPerPage}
                    totalTodos={this.state.todos.length}
                    paginate={this.paginate}
                    currentPages={this.state.currentPage}
                  /> */}
                </React.Fragment>
              )}
            />
            <Route
              component={() => <TodoCalendar todos={this.state.todos} />}
              path="/TodoCalendar"
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
