import React from 'react'
const PropTypes = React.PropTypes;

import groupBy from 'lodash.groupby'

const deckNames = require("../../../public/data/decks-title.json");
require ("../../styles/tablePositions.css");

function PositionLinks({items, type, setActiveDeck, setPlaneRects}) {
    const itemsByDeck = groupBy(items, 'deck');
    const parentID = 'itemListParent-'.concat(type);
    return (
        <div className="panel-group" id={parentID} style={{padding:'5px'}}>
            {Object.keys(itemsByDeck).map((deck, index) => {
                const data = itemsByDeck[deck];
                let targetID = "itemList-".concat(type).concat("-").concat(deck).concat("-").concat(index);
                return (
                    <div key={targetID} className="panel panel-default">
                        {/*Элемент меню*/}
                        <div className="panel-heading">
                            <LinkToAll key={deck} deck={deck} data={data} setActiveDeck={setActiveDeck}
                                       setPlaneRects={setPlaneRects}/>
                            <h5 className="panel-title">
                                <span className="glyphicon glyphicon-chevron-down"/>
                                <a data-toggle="collapse" data-parent={"#".concat(parentID)}
                                   href={"#".concat(targetID)}>{deckNames[deck - 1].title}</a>
                            </h5>
                        </div>
                        {/*Подменю*/}
                        <PositionList deck={deck} id={targetID} data={data} setActiveDeck={setActiveDeck}
                                      setPlaneRects={setPlaneRects}/>
                        {/*<button type="button" className="btn btn-default" data-toggle="collapse"*/}
                                {/*data-target={"#".concat(targetID)} aria-expanded="false" aria-controls={targetID}>*/}
                            {/*<span className="caret"></span>*/}
                        {/*</button>*/}
                    </div>
                )
            })}
        </div>
    )
}

class PositionList extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(item) {
        // e.preventDefault();
        this.props.setActiveDeck(this.props.deck);
        this.props.setPlaneRects(item);
    }

    render() {
    return (
        <div id={this.props.id} className="panel-collapse collapse">
            <ul className="list-group">
                {this.props.data.map((item, index) => {
                    return (<a key={index} href="#" className="list-group-item" data-toggle="modal"
                               data-target="#MapModal" onClick={()=> this.handleClick(item)}><span className="glyphicon glyphicon-map-marker"/>{"Координаты:"+ item.position[0]+", "+item.position[1]}</a>)
                })}
            </ul>
        </div>
    )
}
}

class LinkToAll extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.props.setActiveDeck(this.props.deck);
        this.props.setPlaneRects(this.props.data);
    }

    render() {
        const deckName = deckNames[this.props.deck - 1].title;
        //TODO: REFACTOR
        return (
            <div className="btn-group pull-right">
            <button type="button" className="btn btn-default btn-xs" data-toggle="modal"
                    data-target="#MapModal" onClick={this.handleClick}><span className="glyphicon glyphicon-eye-open"></span></button>
                <button className="btn btn-default btn-xs disabled">{this.props.data.length} шт.</button>
            </div>
        )
    }
}

// Link.propTypes = {
//     data: PropTypes.array.isRequired
// };

export default PositionLinks