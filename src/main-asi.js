var React = require('react');
var ReactDOM = require('react-dom');
var App = require("./components/ASIApp.jsx");

ReactDOM.render(
    <App src="svg/1.svg" rects="631, 262, 667, 298, 640, 549, 672, 587"/>,
    document.getElementById("app")
);