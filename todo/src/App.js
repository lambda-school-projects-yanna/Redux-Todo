import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo';

class App extends Component {

  state = {
    todos: [
      {task: 'Walk the dog', completed: 'false'},
    ]
  };

  render() {
    return (
      <div className="App">
        <ToDo todos={this.state.todos} />
      </div>
    );
  };
};

export default App;
