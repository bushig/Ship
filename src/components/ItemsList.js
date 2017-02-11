var React = require('react');
var propTypes = React.PropTypes;

// var TreeMenu = require('react-tree-menu');
// var TreeNode = require('react-tree-menu').TreeNode;

var ItemsList = React.createClass({
    propTypes: {
        items: propTypes.array.isRequired
    },
    render: function () {
        return(
            <ol>
                {this.props.items.map((item)=>{
                    return(
                        <Link item = {item} />
                    )
                })}
            </ol>
        )
    }
});

function Link(props) {
    return (
        <li><button type="button" className="btn btn-link btn-sm" data-toggle="modal" data-target="#MapModal">Открыть</button></li>
    )
}

Link.propTypes = {
    item: propTypes.object.isRequired
};

module.exports = ItemsList;