import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import './index.css';

import App from './App';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept('./App', () => {
      ReactDOM.render(<App />, document.getElementById('root'))
    })
}

injectTapEventPlugin();
registerServiceWorker();