import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './store';

import './index.css';

import App from './App';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={ store }>
        <ConnectedRouter history={ history }>
            <div>
                <Switch>
                    <Route path="/" component={App} />
                    <Route render={() => (<h1>Missss</h1>)} />
                </Switch>
            </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
