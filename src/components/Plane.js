import React from 'react';
import {ReactSVGPanZoom} from 'react-svg-pan-zoom';
import Dimensions from 'react-dimensions'

import Rect from './Rect'

class Plane extends React.Component {
    constructor(props) {
        super(props);
        this.Viewer = null;
    }

    componentDidMount() {
        console.log('Did mount');
        this.Viewer.fitToViewer();
        this.Viewer.reset();
    }

    componentWillUpdate() {
        this.Viewer.reset();
        // console.log(this.Viewer);
        this.Viewer.state.tool = 'pan';
        // this.Viewer.setPointOnViewerCenter(-8, -4, 3.4);
        // console.log('Did update: ', this.Viewer.getValue());
        this.Viewer.fitToViewer();
        // this.Viewer.zoom(0, 0, 1);
        // this.Viewer.zoomOnViewerCenter(3.4);
        // this.Viewer.zoom(0, 0, 3.4)

    }

    render() {
        return (
                <ReactSVGPanZoom
                    SVGBackground={"#212830"}
                    background={'#212830'}
                    width={window.innerWidth} height={window.innerHeight-54} ref={Viewer => this.Viewer = Viewer}
                    toolbarPosition={"top"}
                >

                    <svg width={200} height={200}>
                        <image href={this.props.src}/>
                        {this.props.rects.map((rect) => {
                            return <Rect key={rect.position} x={rect.position[0]} y={rect.position[1]}/>
                        })}
                    </svg>
                </ReactSVGPanZoom>

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