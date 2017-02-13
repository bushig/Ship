import React from 'react';
import {ReactSVGPanZoom} from 'react-svg-pan-zoom';

import Rect from './Rect'

class Plane extends React.Component {
    constructor(props) {
        super(props);
        this.Viewer = null;
    }

    // componentDidMount() {
    //     console.log('Did mount');
    //     this.Viewer.fitToViewer();
    //     this.Viewer.reset();
    // }

    componentWillUpdate() {
        this.Viewer.reset();
        // this.Viewer.setPointOnViewerCenter(-8, -4, 3.4);
        // console.log('Did update: ', this.Viewer.getValue());
        this.Viewer.fitToViewer();
        // this.Viewer.zoom(0, 0, 1);
        // this.Viewer.zoomOnViewerCenter(3.4);
        // this.Viewer.zoom(0, 0, 3.4)

    }

    render() {
        console.log('SVG:', this.props.src);
        console.log('RECTS:', this.props.rects);
        return (
            <div>
                {/*<button onClick={event => this.Viewer.zoomOnViewerCenter(1.1)}>Zoom in</button>*/}
                {/*<button onClick={event => this.Viewer.fitSelection(40, 40, 200, 200)}>Zoom area</button>*/}
                {/*<button onClick={event => this.Viewer.fitToViewer()}>Fit</button>*/}

                {/*<hr/>*/}

                <ReactSVGPanZoom
                    SVGBackground={'grey'}
                    background={'grey'}
                    width={850} height={800} ref={Viewer => this.Viewer = Viewer}
                    tool={'pan'}
                >

                    <svg width={200} height={200}>
                        <image href={this.props.src}/>
                        {this.props.rects.map((rect) => {
                            return <Rect x={rect.position[0]} y={rect.position[1]}/>
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

export default Plane