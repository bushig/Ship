import React from 'react';
import {ReactSVGPanZoom} from 'react-svg-pan-zoom';
const Isvg = require('react-inlinesvg');

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
                    width={window.innerWidth-20} height={window.innerHeight-70} ref={Viewer => this.Viewer = Viewer}
                    toolbarPosition={"top"}
                >

                    <svg width={1024} height={768}>
                        <DeckImage src={this.props.src} />
                        {this.props.rects.map((rect) => {
                            return <Rect key={rect.position} x={rect.position[0]} y={rect.position[1]}/>
                        })}
                    </svg>
                </ReactSVGPanZoom>

        );
    }
}

class DeckImage extends React.Component {
    render(){
        return (
            <Isvg key={this.props.src} src={this.props.src} wrapper={React.DOM.g} onLoad={()=>console.log("Загрузился план")}>
            </Isvg>
            // <image className="inverted" href={this.props.src} width={1024} height={768} />
        )
    }
}

class SVGLoading extends React.Component {
    render(){
        return(
            <text x="512" y="384" font-size="35">Загрузка</text>
        )
    }
}


Plane.defaultProps = {
    rects: []
};

// style={{outline: "1px solid black"}}
// onClick={event => console.log('click', event.x, event.y, event.originalEvent)}
// onMouseMove={event => console.log('move', event.x, event.y)}

export default Plane;