import React, { Component } from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { Switch } from 'react-router';
import { history } from './store';

import App from './App';
import Route from './AuthRoute.js';
import SessionContainer from './containers/SessionContainer.js';

class Root extends Component {
    render() {
        return (
            <ConnectedRouter history={ history }>
                <div>
                    <Switch>
                        <Route exact path="/login" component={SessionContainer} />
                        <Route path="/" component={App} />
                    </Switch>
                </div>
            </ConnectedRouter>
        )
    }
}

export default Root;