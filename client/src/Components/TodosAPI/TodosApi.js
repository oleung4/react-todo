// just a functional component

import React from "react";
import TodoItemApi from "./TodoItemApi";

import { ListGroup, ListGroupItem } from "reactstrap";

// const Todos = ({...} => {})
function TodosApi({ todos, markComplete, delTodo }) {
  // using destructuring with the prop
  // logic regarding mapping through list
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <ListGroupItem key={todo._id}>
          {/* add our onClick handler */}
          <TodoItemApi
            todo={todo}
            markComplete={markComplete}
            delTodo={delTodo}
          />
        </ListGroupItem>
      );
    })
  ) : (
    <ListGroupItem className="center">
      You have no todo's remaining
    </ListGroupItem>
  );

  return <ListGroup>{todoList}</ListGroup>;
}

export default TodosApi;
