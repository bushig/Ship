/**
 * PlanaSVG.jsx
 * Props: {
 *      (!) src="svg/1.svg",
 *      imgSrc="img/decks/1.png",
 *      rects="631, 262, 667, 298, 640, 549, 672, 587",
 *      roomsHover="false"
 * }
 */

var React = require('react');
var d3 = require("d3");
var decksImagesSizes = require("../../public/data/decks-images-sizes.json");

var D3 = React.createClass({

    getInitialState: function () {
        return {
            light: false,
            loadSVG: null
        }
    },

    loadSVG: function () {
        var svg = d3.select(this.refs.svg);
        var g = d3.select(this.refs.g);
        var svgNode = null;
        var _this = this;
        if (_this.props.src !== undefined) {
            d3.xml(this.props.src,
                function(error, documentFragment) {
                    if (error) {console.log(error); return;}
                    svgNode = documentFragment
                        .getElementsByTagName("svg")[0];
                    //add to svgNode

                    if (_this.props.rects !== undefined) {
                        _this.addRects(svgNode, _this.props.rects);
                    }
                    _this.addRoomHover(svgNode);

                    //end adding to svgNode
                    _this.state.loadSVG = svg.node();
                    // console.log(_this.state);
                    g.node().appendChild(svgNode);

                    var zoom = d3.behavior.zoom().on('zoom', redrawOnZoom);
                    svg.call(zoom).on('dblclick.zoom', null);
                    function redrawOnZoom(){
                        g.attr('transform', 'translate(' + zoom.translate() + ')' + ' scale(' + zoom.scale() + ')');
                    }
                    _this.updateSVG(svg.node());
                });
        } else if (_this.props.imgSrc !== undefined) {
            console.log(_this.props.imgSrc,
                decksImagesSizes["images"],
                decksImagesSizes["images"]);
            var src = _this.props.imgSrc;
            console.log(src.slice(-5, -4));
            var width = 1180;
            var height = 680;

            var img = g.append("svg:image")
                .attr("xlink:href", _this.props.imgSrc)
                .attr("width", width)
                .attr("height", height)
                .attr("x", 0)
                .attr("y",0);
            svg.attr("height", height);

            var zoom = d3.behavior.zoom().on('zoom', redrawOnZoom);
            svg.call(zoom).on('dblclick.zoom', null);
            function redrawOnZoom(){
                g.attr('transform', 'translate(' + zoom.translate() + ')' + ' scale(' + zoom.scale() + ')');
            }
        }


    },

    addRects: function (svgNode, rectsString) {

        var svg = d3.select(svgNode);

        var rects = rectsString.split(",");
        var rectsMatrix = [];
        var buffer = [];
        rects.forEach(function (item, i) {
            buffer.push(item);
            if ( ((i + 1) % 4)  == 0) {
                rectsMatrix.push(buffer);
                buffer = [];
            }
        });
        console.log(rectsMatrix);

        rectsMatrix.forEach(function (item, i) {
            var x = item[0];
            var y = item[1];
            var width = item[2] - item[0];
            var height = item[3] - item[1];

            var rectangle = svg.append("rect")
                .attr("x", x)
                .attr("y", y)
                .attr("width", width)
                .attr("height", height);
            rectangle.style({
                "fill": "none",
                "stroke-width": 5,
                "stroke": "#ff0000"
            });
            var duration = '.5s';
            rectangle.append("animate")
                .attr({
                    "attributeName": "x",
                    "attributeType": "XML",
                    "from": x,
                    "to": x - 0.25 * width,
                    "begin":"0s",
                    "dur": duration,
                    "repeatCount": "indefinite"
                });
            rectangle.append("animate")
                .attr({
                    "attributeName": "y",
                    "attributeType": "XML",
                    "from": y,
                    "to": y - 0.25 * height,
                    "begin":"0s",
                    "dur": duration,
                    "repeatCount": "indefinite"
                });
            rectangle.append("animate")
                .attr({
                    "attributeName": "width",
                    "attributeType": "XML",
                    "from": width,
                    "to": 2 * width,
                    "begin":"0s",
                    "dur": duration,
                    "repeatCount": "indefinite"
                });
            rectangle.append("animate")
                .attr({
                    "attributeName": "height",
                    "attributeType": "XML",
                    "from": height,
                    "to": 2 * height,
                    "begin":"0s",
                    "dur": duration,
                    "repeatCount": "indefinite"
                });

        });
    },

    changeLight: function () {
        this.setState({
            light: !this.state.light
        });
    },

    updateSVG: function (svg) {
        var rooms = svg.querySelectorAll(".room");
        if (this.state.light) {
            for (var i = 0; i < rooms.length; i++) {
                rooms[i].style.stroke = "#000000"
            }
            svg.style.backgroundColor = "#ffffff";
        } else {
            for (var i = 0; i < rooms.length; i++) {
                rooms[i].style.stroke = "#ffffff"
            }
            svg.style.backgroundColor = "rgb(33,40,48)";
        }
    },

    addRoomHover: function (svg) {
        if (this.props.roomsHover === "true") {
            var rooms = svg.querySelectorAll(".room");
            for (var i = 0; i < rooms.length; i++) {
                rooms[i].addEventListener("mouseover", function (e) {
                    d3.select(e.target).style({
                        "fill": "red",
                        "fill-opacity": 0.5
                    });
                });
                rooms[i].addEventListener("mouseleave", function (e) {
                    d3.select(e.target).style({
                        "fill": "rgba(0,0,0,0)"
                    });
                });
            }
        }
    },

    componentDidMount: function () {
        this.loadSVG();
    },

    componentDidUpdate: function () {
        this.updateSVG(this.state.loadSVG);
    },

    render: function () {
        return (
            <div>
                <svg ref="svg" onDoubleClick={this.changeLight} width="100%" height="100%">
                    <g ref="g"></g>
                </svg>
            </div>
        );
    }
});

module.exports = D3;