import React from 'react';

import SvgFileZoomPan from 'react-svg-file-zoom-pan';
const my_path = "svg/1.svg";

require("./PlaneSVG.css");


class PlaneSVG extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            light: true
        };
    };

    onMouseDown(e) {
        if( e.button == 1 ) {
            e.preventDefault();
        }
    }

    changeStyle() {
        this.setState({light: !this.state.light});

    }

    render() {
        return (
        <div>
            <button onClick={this.changeStyle.bind(this)}>Change</button>
            <div onMouseDown={this.onMouseDown}>
                <SvgFileZoomPan
                    svgPath={my_path}
                    duration={300}
                    resize={true}
                    ref="component"
                />
            </div>
        </div>

        );
    }

    componentDidMount() {
        let component = this.refs.component
            .getDOMNode()
            .querySelector("svg");
        console.log(component);
        let _this = this;
        setTimeout(function() {
            let svg = component.querySelector("svg");
            if (svg) {
                console.log(_this.state);
                if (_this.state.light) {
                    let rooms = document.querySelectorAll(".room");
                    for (let i = 0; i < rooms.length; i++) {
                        // rooms[i].classList.toggle("dark")
                        rooms[i].style.stroke = "#ffffff";
                    }
                    document.querySelector("svg").style.backgroundColor = "#000000";
                } else {
                    let rooms = document.querySelectorAll(".room");
                    for (let i = 0; i < rooms.length; i++) {
                        // rooms[i].classList.toggle("dark")
                        rooms[i].style.stroke = "#000000";
                    }
                    document.querySelector("svg").style.backgroundColor = "#ffffff";
                }
            } else {
                this.componentDidMount();
            }
        }.bind(this), 300);
    }
}

module.exports = PlaneSVG;