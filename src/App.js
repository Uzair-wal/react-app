import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoForm, TodoList } from './components/todo/';


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

  }

  handleInputChange (evt) {
    this.setState({
      currentTodo: evt.target.value
    })
  }

  render() {
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

          <TodoForm handleInputChange={this.handleInputChange} currentTodo={this.state.currentTodo} />

          <TodoList todos={this.state.todos} />

        </div>
      </div>
    );
  }
}

export default App;
