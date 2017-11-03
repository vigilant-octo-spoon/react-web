import React, { Component } from 'react';
import Route from './AuthRoute';

import './styles/App.scss';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SessionContainer from './containers/SessionContainer.js';
import MethodologiesContainer from './containers/MethodologiesContainer.js';
import NavbarContainer from './containers/NavbarContainer.js';


class App extends Component {
  render() {
    return (
    	<MuiThemeProvider>
      	<div className="App">
            <NavbarContainer />
            <Route path={`${this.props.match.url}login`} component={SessionContainer} />
            <Route path={`${this.props.match.url}methodologies`} component={MethodologiesContainer} />
  			</div>
      </MuiThemeProvider>
    );
  }
}

export default App;
