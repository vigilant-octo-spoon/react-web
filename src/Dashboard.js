import React, { Component } from 'react';
import { Route } from 'react-router';

import './styles/App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavbarContainer from './containers/NavbarContainer.js';
import DashboardTableContainer from './containers/DashboardTableContainer.js';
import StepsContainer from './containers/StepsContainer.js';

class Dashboard extends Component {

  render() {
    return (
    	<MuiThemeProvider>
      	<div id="dashboard" className="App">
            <NavbarContainer />
            <Route path={`${this.props.match.url}dashboard`} component={DashboardTableContainer} />
            <Route path={`${this.props.match.url}follows/:followId`} component={StepsContainer} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Dashboard;
