import React from 'react'


export default function Content(props) {
    return (
        <div className="container" style={{marginTop: "55px"}}>
            {props.children}
        </div>
    )
}