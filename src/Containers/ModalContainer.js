var React = require("react");
var Plane = require("../components/PlaneSVG.jsx");
var propTypes = React.PropTypes;


var ModalContainer = React.createClass({

    getInitialState: function () {
        return {
            activeDeck: 1,
        }
    },

    componentDidMount: function () {
        // var _this = this;
        // $(_this.refs.modal).on('show.bs.modal', function (e) {
        //     $(_this.refs.modalDialog).css({
        //         width: '80%'
        //     });
        //     $(_this.refs.modalBody).css({
        //         height: window.innerHeight - 230 + "px",
        //         marginBottom: '30px',
        //         marginRight: '30px'
        //     });
        // });
        // if (this.state.isVisible) {
        //     $(_this.refs.modal).modal('show');
        // }
    },

    render: function () {
        return (
            <div className="modal fade" id="MapModal" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                            <h4 className="modal-title">{this.state.activeDeck} уровень</h4>
                        </div>
                        <div className="modal-body" ref="modalBody">
                            <Plane src={"svg/" + 1 + ".svg"} roomsHover="false" rects="631, 262, 667, 298, 640, 549, 672, 587"/>
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
module.exports = ModalContainer;