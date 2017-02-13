var React = require("react");
var Plane = require("./Plane");
var jQuery = require("jquery");
var propTypes = React.PropTypes;


var Modal = React.createClass({

    render: function () {
        return (
            <div className="modal fade" id="MapModal" tabIndex="-1" role="dialog">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                            <h4 className="modal-title">{this.props.deck} уровень</h4>
                        </div>
                        <div className="modal-body">
                            <Plane src={"svg/" + this.props.deck + ".svg"} rects={this.props.rects} />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Закрыть</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});
module.exports = Modal;