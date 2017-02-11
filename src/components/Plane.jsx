/**
 * Plane.jsx
 * Props:
 * {
 *      (!) scr="img/decks/1.png"
 *      (!) width="725"
 *      (!) height="875"
 *          rects=""
 * }
 */

var React = require("react");

require("./Plane.css");


var Plane = React.createClass({

    getInitialState: function () {
        return {
            zoom: 1,
            step: 1.1,
            createWidth: this.props.width,
            createHeight: this.props.height,
            X: 0,
            Y: 0,
            isDrag: false,
            lastCursorX: 0,
            lastCursorY: 0,
//                rect: this.props.rects.split(' ')
        }
    },

    getSVGPosition: function (e) {
        var target = e.target;
        var classNameTarget = target.toString();
        var boundingRect = null;
        if (classNameTarget === "[object HTMLDivElement]") {
//                console.log("DIV!!");
            boundingRect = target.querySelector("svg").getBoundingClientRect();

        } else if (classNameTarget === "[object SVGImageElement]") {
//                console.log("SVG!!");
            boundingRect = target.getBoundingClientRect();
        }
        var svgLeft = boundingRect.left;
        var svgTop = boundingRect.top;
//            console.log(svgLeft + " " + svgTop);
        return {
            left: svgLeft,
            top: svgTop
        }
    },

    onWheel: function (e) {
        e.preventDefault();
        var svgPosition = this.getSVGPosition(e);
        var shiftX;
        var shiftY;
        if (e.deltaY < 0) {
            var newZoom = this.state.zoom * this.state.step;
            shiftX = (e.clientX - svgPosition.left) * (this.state.step - 1);
            shiftY = (e.clientY - svgPosition.top) * (this.state.step - 1);
        } else {
            var newZoom = this.state.zoom / this.state.step;
            shiftX = (e.clientX - svgPosition.left) * (1 / this.state.step - 1);
            shiftY = (e.clientY - svgPosition.top) * (1 / this.state.step - 1);
        }

        var newX = this.state.X  - shiftX;
        var newY = this.state.Y - shiftY;
        this.setState({
            zoom: newZoom,
            X: newX,
            Y: newY
        });
    },

    onMouseDown: function (e) {
        if( e.button == 1 ) {
            e.preventDefault();

            var target = e.target;
            target.style.cursor = "move";

            this.setState({
                isDrag: true,
                lastCursorX: e.pageX,
                lastCursorY: e.pageY
            });
        }

    },

    onMouseUp: function (e) {
        var target = e.target;
        target.style.cursor = "auto";

        this.setState({
            isDrag: false
        });
    },

    onMouseMove: function (e) {
        var isDrag = this.state.isDrag;
        var x = this.state.X;
        var y = this.state.Y;
        if (isDrag) {
            var currCursorX = e.pageX;
            var currCursorY = e.pageY;
            var deltaX = this.state.lastCursorX - currCursorX;
            var deltaY = this.state.lastCursorY - currCursorY;
            this.setState({
                X: x - deltaX,
                Y: y - deltaY,
                lastCursorX: currCursorX,
                lastCursorY: currCursorY
            });
        }
    },

    render: function(){
        // if (this.props.rects === undefined || this.props.src === undefined || this.props.width === undefined || this.props.height === undefined){
        //     console.log(this.props);
        //     return (<div>Wrong props!</div>);
        // }

        var width = this.state.createWidth * this.state.zoom;
        var height = this.state.createHeight * this.state.zoom;
        var style = {
            width: width,
            height: height,
            left: this.state.X,
            top: this.state.Y
        };
        var styleForRect = {
            stroke: '#ff0011',
            fill: '#ff0000',
            fillOpacity: 0.5,
            strokeWidth: '1px'
        };
//            var rect = this.state.rect;

        var rect = this.props.rects !== undefined ? this.props.rects.split(","): [];
        var rectsAsMatrix = [];
        var buffer = [];
        for (var i = 0; i < rect.length; i++) {
            rect[i] *= this.state.zoom;
            buffer.push(rect[i]);
            if (buffer.length == 4) {
                rectsAsMatrix.push(buffer);
                buffer = [];
            }
        }
        console.log(rectsAsMatrix);
        var duration = '.5s';
        return (
            <div onMouseDown={this.onMouseDown} onMouseMove={this.onMouseMove} onMouseUp={this.onMouseUp} className="box" onMouseLeave={this.onMouseUp} onWheel={this.onWheel}>
                <svg className="plane" style={style}>
                    <image  width={width} height={height} xlinkHref={this.props.src} />
                    {rectsAsMatrix.map(function (rect) {
                        return (
                            <rect x={rect[0]} y={rect[1]} width={rect[2]} height={rect[3]}
                                  style={styleForRect} >
                                <animate attributeName="x"
                                         attributeType="XML"
                                         from={rect[0]} to={rect[0] - 0.25 * rect[2]}
                                         begin="0s" dur={duration}
                                         repeatCount="indefinite"
                                />
                                <animate attributeName="y"
                                         attributeType="XML"
                                         from={rect[1]} to={rect[1] - 0.25 * rect[3]}
                                         begin="0s" dur={duration}
                                         repeatCount="indefinite"
                                />
                                <animate attributeName="width"
                                         attributeType="XML"
                                         from={rect[2]} to={2 * rect[2]}
                                         begin="0s" dur={duration}
                                         repeatCount="indefinite"
                                />
                                <animate attributeName="height"
                                         attributeType="XML"
                                         from={rect[3]} to={2 * rect[3]}
                                         begin="0s" dur={duration}
                                         repeatCount="indefinite"
                                />
                            </rect>
                        )
                    })}

                </svg>
            </div>
        );
    }
});

module.exports = Plane;