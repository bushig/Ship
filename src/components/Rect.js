import React from "react"

function Rect(props) {
    const width = 20;
    const height = 20;
    const x = props.x-width/2;
    const y = props.y-height/2;
    return (<rect onClick={()=>console.log("Clicked!")} x={x} y={y} width={width} height={height} style={{"fill": "none",
        "strokeWidth": 5, "stroke": "#ff0000"}}>
        {/*<animate attributeName="x" from={x} to={x-0.25*width} dur="0.5s" begin="0s" repeatCount="indefinite" />*/}
        {/*<animate attributeName="y" from={y} to={y-0.25*height} dur="0.5s" begin="0s" repeatCount="indefinite" />*/}
        {/*<animate attributeName="width" from={width} to={2*width} dur="0.5s" begin="0s" repeatCount="indefinite" />*/}
        {/*<animate attributeName="height" from={height} to={2*height} dur="0.5s" begin="0s" repeatCount="indefinite" />*/}

    </rect>)
}

export default Rect;