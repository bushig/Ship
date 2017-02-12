import React from 'react';
import {ReactSVGPanZoom} from 'react-svg-pan-zoom';

import Rect from './Rect'

class Plane extends React.Component {
    constructor(props) {
        super(props);
        this.Viewer = null;
    }

    componentDidMount() {
        this.Viewer.fitToViewer();
    }

    render() {
        console.log('SVG:', this.props.src);
        return (
            <div>
                {/*<button onClick={event => this.Viewer.zoomOnViewerCenter(1.1)}>Zoom in</button>*/}
                {/*<button onClick={event => this.Viewer.fitSelection(40, 40, 200, 200)}>Zoom area</button>*/}
                {/*<button onClick={event => this.Viewer.fitToViewer()}>Fit</button>*/}

                {/*<hr/>*/}

                <ReactSVGPanZoom
                    SVGBackground = {'grey'}
                    background = {'grey'}
                    width={850} height={800} ref={Viewer => this.Viewer = Viewer}
                >

                    <svg width={725} height={825}>
                        <image href={this.props.src}/>
                        <Rect x="50" y="50"/>
                    </svg>
                </ReactSVGPanZoom>
            </div>
        );
    }
}

// style={{outline: "1px solid black"}}
// onClick={event => console.log('click', event.x, event.y, event.originalEvent)}
// onMouseMove={event => console.log('move', event.x, event.y)}

export default Plane