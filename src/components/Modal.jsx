var React = require("react");
var Plane = require("./PlaneSVG.jsx");
var jQuery = require("jquery");
var propTypes = React.PropTypes;


var Modal = React.createClass({

    getInitialState: function () {
        return {
            isVisible: false
        }
    },

    componentDidMount: function () {
        var _this = this;
        $(_this.refs.modal).on('show.bs.modal', function (e) {
            $(_this.refs.modalDialog).css({
                width: '80%'
            });
            $(_this.refs.modalBody).css({
                height: window.innerHeight - 230 + "px",
                marginBottom: '30px',
                marginRight: '30px'
            });
        });
        if (this.state.isVisible) {
            $(_this.refs.modal).modal('show');
        }
    },

    render: function () {
        return (
            <div className="modal fade" ref="modal" id="MapModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div className="modal-dialog" ref="modalDialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                            <h4 className="modal-title">{this.props.title} уровеньцу</h4>
                        </div>
                        <div className="modal-body" ref="modalBody">
                            <Plane src={"svg/" + this.props.deck + ".svg"} roomsHover="false" rects="631, 262, 667, 298, 640, 549, 672, 587"/>
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