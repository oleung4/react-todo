import React, { Component } from "react";
import { Button, Input } from "reactstrap";

export class TodoItemApi extends Component {
  // create styling logic to cross out item if checked
  getStyle = () => {
    return {
      margin: "auto",
      paddingLeft: "1em",
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
  };

  // traversing the tree - component drilling via prop
  // we need to pass along the id

  render() {
    // using destructuring
    const { _id, content, completed } = this.props.todo;
    const { markComplete, delTodo } = this.props;
    // if(completed) {
    //   return (
    //     <div>
    //       <p style={this.getStyle()}>
    //         <Input type="checkbox" checked={this.state.checked} onChange={this.props.markComplete.bind(this, id)} /> {' '}
    //         { title }
    //         <Button onClick={this.props.delTodo.bind(this, id)} close />
    //       </p>
    //     </div>
    //   )
    // }

    return (
      <div>
        <p style={this.getStyle()}>
          <Input
            type="checkbox"
            checked={completed}
            onChange={() => markComplete(_id)}
          />{" "}
          {content}
          <Button
            onClick={() => {
              delTodo(_id);
            }}
            close
          />
        </p>
      </div>
    );
  }
}

export default TodoItemApi;
