import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    todos: [
      {task: 'Walk the dog', completed: 'false'},
    ]
  };

  render() {
    return (
      <div className="App">
        <p>Placeholder</p>
      </div>
    );
  };
};

export default App;
