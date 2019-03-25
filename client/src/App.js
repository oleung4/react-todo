import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Todos from "./Components/Todos/Todos";
import AddTodo from "./Components/Todos/AddTodo";
import TodosApi from "./Components/TodosAPI/TodosApi";
import AddTodoApi from "./Components/TodosAPI/AddTodoApi";

import Header from "./Components/Layout/Header";
import About from "./Components/pages/About";
import uniqid from "uniqid";
import axios from "axios";

import { Container } from "reactstrap";

// our root component - where we'll store our state
class App extends Component {
  state = {
    todos: [
      { id: 1, content: "check out Udemy courses", completed: false },
      { id: 2, content: "keep studying react", completed: false },
      { id: 3, content: "work on portfolio", completed: false }
    ],
    jsonTodos: []
  };

  componentDidMount() {
    axios.get("/api").then(res =>
      this.setState({
        jsonTodos: res.data
      })
    );
  }

  //////////////// todo handlers ////////////////

  // using local state, no backend to store data

  // delete function has to be in the app.js as it will interact with the state
  delTodo = id => {
    // take an id as a parameter to lookup and filter array
    console.log(id);
    // filter method is non-destructive, returns a new array
    const todos = this.state.todos.filter(todo => {
      // console.log(todo.id);
      // return everything but the deleted todo
      return todo.id !== id;
    });
    this.setState({
      todos
    });
  };

  addTodo = content => {
    const todo = {
      id: uniqid(),
      content,
      completed: false
    };
    // creating a new array, and adding new item
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    });
  };

  markComplete = id => {
    // console.log(id)
    // we want to change the state based on the tick action
    this.setState({
      todos: this.state.todos.map(todo => {
        // iterates over each entry
        // matching criteria
        if (todo.id === id) {
          // toggle
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  //////////////// api handlers ////////////////

  // we want to adjust these handlers to make a post request to the rest api
  delTodoAPI = id => {
    console.log(id);
    axios.delete(`/api/${id}`).then(res =>
      this.setState({
        jsonTodos: [...this.state.jsonTodos.filter(todo => todo._id !== id)]
      })
    );
  };

  addTodoAPI = content => {
    axios
      .post("/api", {
        content,
        completed: false
      })
      .then(res =>
        this.setState({
          jsonTodos: [...this.state.jsonTodos, res.data]
        })
      );
  };

  markCompleteAPI = (id, completed) => {
    axios
      .put(`/api/${id}`, {
        completed: !completed
      })
      .then(res =>
        this.setState({
          jsonTodos: this.state.jsonTodos.map(todo => {
            if (todo._id === id) {
              todo.completed = !todo.completed;
            }
            return todo;
          })
        })
      );
    // this.setState({
    //   jsonTodos: this.state.jsonTodos.map(todo => {
    //     if (todo._id === id) {
    //       todo.completed = !todo.completed;
    //     }
    //     return todo;
    //   })
    // });
  };

  render() {
    return (
      // to use the router element, we need to wrap our app
      <Router>
        <Container>
          <Header />

          <Route
            exact
            path="/"
            render={props => (
              <React.Fragment>
                <Todos
                  todos={this.state.todos}
                  markComplete={this.markComplete}
                  delTodo={this.delTodo}
                />
                <AddTodo addTodo={this.addTodo} />
              </React.Fragment>
            )}
          />

          <Route
            path="/api"
            render={props => (
              <React.Fragment>
                <TodosApi
                  todos={this.state.jsonTodos}
                  markComplete={this.markCompleteAPI}
                  delTodo={this.delTodoAPI}
                />
                <AddTodoApi addTodo={this.addTodoAPI} />
              </React.Fragment>
            )}
          />

          <Route path="/about" component={About} />
        </Container>
      </Router>
    );
  }
}

export default App;
