import React, { Component } from 'react';
import { Route } from 'react-router';
import { connect } from 'react-redux';

import './styles/App.scss';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SessionContainer from './containers/SessionContainer.js';
import MethodologiesContainer from './containers/MethodologiesContainer.js';
import NavbarContainer from './containers/NavbarContainer.js';
import MethodologiesTable from './components/MethodologiesTable.js';

// react-table
import makeData from "./Utils";
import matchSorter from 'match-sorter'


class App extends Component {

  render() {
    return (
    	<MuiThemeProvider>
      	<div className="App">
            <NavbarContainer />
            <Route path={`${this.props.match.url}login`} component={SessionContainer} />
            <Route path={`${this.props.match.url}methodologies`} component={MethodologiesContainer} />
  			 <MethodologiesTable />
        </div>
        
      </MuiThemeProvider>
    );
  }
}

export default App;
