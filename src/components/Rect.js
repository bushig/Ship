import React from "react"

function Rect(props) {
    const width = 5;
    const height = 5;
    const x = props.x;
    const y = props.y;
    return (<rect x={x} y={y} width={width} height={height} style={{"fill": "none",
        "stroke-width": 1, "stroke": "#ff0000"}}>
        <animate attributeName="x" from={x} to={x-0.25*width} dur="0.5s" begin="0s" repeatCount="indefinite" />
        <animate attributeName="y" from={y} to={y-0.25*height} dur="0.5s" begin="0s" repeatCount="indefinite" />
        <animate attributeName="width" from={width} to={2*width} dur="0.5s" begin="0s" repeatCount="indefinite" />
        <animate attributeName="height" from={height} to={2*height} dur="0.5s" begin="0s" repeatCount="indefinite" />

    </rect>)
}

export default Rect;