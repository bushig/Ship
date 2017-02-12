const React = require('react');
const ReactDOM = require('react-dom');
const App = require("./components/App");

//redux
import {Provider} from 'react-redux'
import store from './store'

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("app")
);