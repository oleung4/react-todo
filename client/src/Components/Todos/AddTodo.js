// we need state to store what user types into input field

import React, { Component } from 'react';
import { Form, Input, Label } from 'reactstrap';

export default class AddTodo extends Component {
  // component-level state vs. app-level state
  state = {
    content: '',
    selected: false
  }
  
  // event handlers
  handleChange = (e) => {
    this.setState({
      // catching the input of typing the new todo
      content: e.target.value
      // [e.target.name]: e.target.value
    });
  }
  handleSubmit = (e) => {
    e.preventDefault(); // prevents page refresh
    // console.log(this.state);
    this.props.addTodo(this.state.content); // passing this new todo up the app - the content state set from input submission
    // clear the input bar after submitting new todo
    this.setState({
      content: ''
    })
  }
  // input styling logic
  handleFocus = (e) => {
    this.setState({
      selected: true
    })
    console.log('focused');
  }
  handleBlur = (e) => {
    this.setState({
      selected: false
    })
    console.log('blurred');
  }    
  
  // Input bar styling
  lineStyle = () => {
    return {
      border: 'none',
      borderRadius: 0,
      borderBottom: '1px solid',
      borderBottomColor: 'rgb(158, 158, 158)',
      boxShadow: 'none',
      // paddingLeft: 0,
      // paddingRight: 0
    }
  }

  lineSelectedStyle = () => {
    return {
      border: 'none',
      borderRadius: 0,
      borderBottom: '1px solid',
      borderBottomColor: 'rgb(81,163,154)',
      boxShadow: 'none',
      // paddingLeft: 0,
      // paddingRight: 0
    }
  }
  // label styling
  getStyle = () => {
    return {
      fontSize: '0.8rem',
      color: '#9e9e9e',
    }
  }

  render() {
    return (
      <div className='mt-2'>
        <Form onSubmit={this.handleSubmit}>
          <Label style={this.getStyle()}>Add new todo:</Label>
          <Input style={this.state.selected ? this.lineSelectedStyle() : this.lineStyle()} type="text" onFocus={this.handleFocus} onBlur={this.handleBlur} onChange={this.handleChange} value={this.state.content}/>
        </Form>
      </div>
    )
  }
}