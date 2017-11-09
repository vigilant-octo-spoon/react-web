import React, { Component } from 'react';
import { Route } from 'react-router';

import './styles/App.scss';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MethodologiesContainer from './containers/MethodologiesContainer.js';
import NavbarContainer from './containers/NavbarContainer.js';
import MethodologiesTable from './components/MethodologiesTable.js';

class Dashboard extends Component {

  render() {
    return (
    	<MuiThemeProvider>
      	<div id="dashboard" className="App">
            <NavbarContainer />
            <Route path={`${this.props.match.url}methodologies`} component={MethodologiesContainer} />
        </div>
        
      </MuiThemeProvider>
    );
  }
}

export default Dashboard;
