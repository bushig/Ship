var React = require("react");
var ReactDOM = require("react-dom");
var $ = require("jquery");
var Modal = require("./Modal.jsx");

var Link = React.createClass({
    showModal: function (e) {
        e.preventDefault();
        $("#app-modal").html("");
        ReactDOM.render(
            <Modal title={this.props.children} href={this.props.href} deck={this.props.deck}/>,
            document.getElementById("app-modal")
        );
    },
    render: function () {
        return (
            <a onClick={this.showModal} href={this.props.href}>{this.props.children}</a>
        );
    }
});
module.exports = Link;