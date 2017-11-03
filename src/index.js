import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Switch } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './store';

import './index.css';

import App from './App';
import Route from './AuthRoute.js';
import SessionContainer from './containers/SessionContainer.js';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={ store }>
        <ConnectedRouter history={ history }>
            <div>
                <Switch>
                    <Route exact path="/login" component={SessionContainer} />
                    <Route path="/" component={App} />
                </Switch>
            </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
