import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import LoginContainer from './containers/LoginContainer.js';
import NavbarContainer from './containers/NavbarContainer.js';
import MethodologiesContainer from './containers/MethodologiesContainer.js';
import ProfileContainer from './containers/ProfileContainer.js';

class App extends Component {
  render() {
    return (
    	<MuiThemeProvider>
      	<div className="App">
			    <NavbarContainer />
			    <LoginContainer />
			    <MethodologiesContainer />
          <ProfileContainer />
  			</div>
      </MuiThemeProvider>
    );
  }
}

export default App;
