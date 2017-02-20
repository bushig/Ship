import React from 'react';
import {ReactSVGPanZoom} from 'react-svg-pan-zoom';
const Isvg = require('react-inlinesvg');
// import Toolbar from './Toolbar'

import Rect from './Rect'
import DeckImage from './DeckSVG'

class Plane extends React.Component {
    constructor(props) {
        super(props);

        this.black = "#212830";
        this.white = "white";

        this.Viewer = null;
    }

    componentDidMount() {
        this.Viewer.fitToViewer();
        this.Viewer.reset();
        this.Viewer.state.tool = 'pan';
    }

    // shouldComponentUpdate(nextProps, nextState){
    //     return this.props.src !== nextProps.src;
    // }

    componentWillReceiveProps(nextProps){
        if (nextProps.src !==this.props.src){
            this.Viewer.reset();
            this.Viewer.fitToViewer();
        }
    }
    // componentWillUpdate() {
    //
    //     // console.log(this.Viewer);
    //     // this.Viewer.state.tool = 'auto';
    //     // this.Viewer.setPointOnViewerCenter(-8, -4, 3.4);
    //     // console.log('Did update: ', this.Viewer.getValue());
    //
    //     // this.Viewer.zoom(0, 0, 1);
    //     // this.Viewer.zoomOnViewerCenter(3.4);
    //     // this.Viewer.zoom(0, 0, 3.4)
    //
    // }

    render() {
        return (
            <div>
                <ReactSVGPanZoom
                    detectAutoPan = {false}
                    onDoubleClick={() => this.props.changeColor(!this.props.inverted)}
                    SVGBackground={this.props.inverted ? this.white: this.black}
                    background={this.props.inverted ? this.white: this.black}
                    width={window.innerWidth-20} height={window.innerHeight-70} ref={Viewer => this.Viewer = Viewer}
                    toolbarPosition={"top"}
                >

                    <svg width={1024} height={768}>
                        <DeckImage src={this.props.src} inverted={this.props.inverted}/>
                        {this.props.rects.map((rect) => {
                            return <Rect key={rect.position} x={rect.position[0]} y={rect.position[1]}/>
                        })}
                    </svg>
                </ReactSVGPanZoom>
            </div>

        );
    }
}


Plane.defaultProps = {
    rects: []
};

// style={{outline: "1px solid black"}}
// onClick={event => console.log('click', event.x, event.y, event.originalEvent)}
// onMouseMove={event => console.log('move', event.x, event.y)}

export default Plane;