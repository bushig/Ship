import React from 'react';

const Isvg = require('react-inlinesvg');

class DeckImage extends React.Component {
    componentDidUpdate(){
        // console.log("Обновилась карта", this.props.inverted);
        this.updateSVG();
    }
    updateSVG() {
    const rooms = document.querySelectorAll(".room");
    if (this.props.inverted) {
        for (var i = 0; i < rooms.length; i++) {
            rooms[i].style.stroke = "#000000"
        }
        // svg.style.backgroundColor = "#ffffff";
    } else {
        for (var i = 0; i < rooms.length; i++) {
            rooms[i].style.stroke = "#ffffff"
        }
        // svg.style.backgroundColor = "rgb(33,40,48)";
    }
}
    render(){
        return (
            <Isvg key={this.props.src} src={this.props.src} wrapper={React.DOM.g} onLoad={()=>console.log("Загрузился план")}>
            </Isvg>
        )
    }
}
                //<image className="inverted" href={this.props.src} width={1024} height={768} />

export default DeckImage