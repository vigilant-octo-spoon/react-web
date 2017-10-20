import React, { Component } from 'react';
import './App.css';
import LoginContainer from './containers/LoginContainer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LoginContainer />
      </div>
    );
  }
}

export default App;
