import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Switch } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './store';

import './index.css';

import Dashboard from './Dashboard';
import Route from './AuthRoute.js';
import SessionContainer from './containers/SessionContainer.js';

class App extends Component {
    render() {
        return (
            <Provider store={ store }>
                <ConnectedRouter history={ history }>
                    <div>
                        <Switch>
                            <Route exact path="/login" component={SessionContainer} />
                            <Route path="/" component={Dashboard} />
                        </Switch>
                    </div>
                </ConnectedRouter>
            </Provider>
        )
    }
}

export default App;