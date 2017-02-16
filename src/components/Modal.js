var React = require("react");
var Plane = require("./Plane");
var jQuery = require("jquery");
var propTypes = React.PropTypes;


require('../styles/modal.css');

var Modal = React.createClass({

    render: function () {
        return (
            <div className="modal fade" id="MapModal" tabIndex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
                <div className="modal-dialog full-screen">
                    <div className="modal-content full-size">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                            <h4 className="modal-title" id="modalLabel">{this.props.deck} уровень</h4>
                        </div>
                        <div className="modal-body body-style">
                            <div>
                                <Plane src={"svg/" + this.props.deck + ".svg"} rects={this.props.rects} />
                            </div>
                            {/*<div className="col-md-4">*/}
                                    {/*<h1>Информация:</h1>*/}
                                    {/*<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>*/}
                            {/*</div>*/}
                        </div>
                        {/*<div className="modal-footer footer-style">*/}
                            {/*<button type="button" className="btn btn-default" data-dismiss="modal">Закрыть</button>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        );
    }
});
module.exports = Modal;