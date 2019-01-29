import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducers'

// need to import reducer from reducer directory 
const store = createStore(reducer)

ReactDOM.render(
    <Provider store={store}> 
        <App />
    </Provider>,
    document.getElementById('root')
);
