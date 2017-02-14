import React from 'react'
const PropTypes = React.PropTypes;

import groupBy from 'lodash.groupby'

const deckNames = require("../../../public/data/decks-title.json");

function PositionLinks({items, setActiveDeck, setPlaneRects}) {
    const itemsByDeck = groupBy(items, 'deck');
    // console.log(itemsByDeck);
    return(
        <div>
            {Object.keys(itemsByDeck).map((deck, index)=>{
                console.log('Группа:', itemsByDeck[deck]);
                const data = itemsByDeck[deck];
                return(
                    <Link key={deck} deck = {deck} data = {data} setActiveDeck={setActiveDeck} setPlaneRects={setPlaneRects} />
                )
            })}
        </div>
    )
}


class Link extends React.Component {
    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e){
        e.preventDefault();
        this.props.setActiveDeck(this.props.deck);
        this.props.setPlaneRects(this.props.data);
    }
    render(){
        const deckName = deckNames[this.props.deck-1].title;
        //TODO: REFACTOR
        return (
            <button key={this.props.deck} type="button" className="btn btn-default btn-block btn-sm pull-left" data-toggle="modal" data-target="#MapModal" onClick={this.handleClick}>{deckName} <span className="label badge">{this.props.data.length} шт.</span></button>
        )
    }
}

// Link.propTypes = {
//     data: PropTypes.array.isRequired
// };

export default PositionLinks