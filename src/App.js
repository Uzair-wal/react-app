import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoForm, TodoList } from './components/todo/';
import { addTodo, generateId } from './lib/todoHelpers';


class App extends Component {

  constructor(){
    super();

    this.state = {

      todos: [
        {id: 1, name: 'Learn React JS', isComplete: false},
        {id: 2, name: 'Learn Redux', isComplete: true},
        {id: 3, name: 'Build an awesome app', isComplete: false}
      ],

      currentTodo: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    //this.handleEmptySubmit = this.handleEmptySubmit().bind(this);

  }

  handleSubmit (evt) {
    evt.preventDefault();
    if (this.state.currentTodo) {
      const newTodo = {id: generateId(), name: this.state.currentTodo, isComplete: false};
      const updatedTodos = addTodo(this.state.todos, newTodo);
      this.setState({
        todos: updatedTodos,
        currentTodo: '',
        errorMessage: false
      })
    }else {
      this.setState({
        errorMessage: 'Please enter a todo name to create...'
      })
    }
  }

  // handleEmptySubmit (evt) {
  //   evt.preventDefault();
  //   this.setState({
  //     errorMessage: 'Please enter a todo name to create...'
  //   })
  // }

  handleInputChange (evt) {
    this.setState({
      currentTodo: evt.target.value
    })
  }

  render() {
    // const submitHandler = this.state.currentTodo ? this.handleSubmit : this.handleEmptySubmit;
    return (
      <div className="App">

        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <p className="App-intro">
          This is a demo app...
        </p>

        <div className="Todo-App">
          
          {this.state.errorMessage && <span className="error"> {this.state.errorMessage} </span>}

          <TodoForm
              handleInputChange={this.handleInputChange}
              currentTodo={this.state.currentTodo}
              handleSubmit={this.handleSubmit}
          />

          <TodoList todos={this.state.todos} />

        </div>
      </div>
    );
  }
}

export default App;
