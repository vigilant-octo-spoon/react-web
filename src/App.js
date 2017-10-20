import React, { Component } from 'react';
import { Route } from 'react-router';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import LoginContainer from './containers/LoginContainer.js';
import MethodologiesContainer from './containers/MethodologiesContainer.js';

class App extends Component {
  render() {
    return (
    	<MuiThemeProvider>
      	<div className="App">
            <Route path={`${this.props.match.url}login`} component={LoginContainer} />
            <Route path={`${this.props.match.url}methodologies`} component={MethodologiesContainer} />
  			</div>
      </MuiThemeProvider>
    );
  }
}

export default App;
