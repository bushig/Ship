import React from 'react'
const PropTypes = React.PropTypes;

import groupBy from 'lodash.groupby'

const deckNames = require("../../../public/data/decks-title.json");

function PositionLinks({items, setActiveDeck, setPlaneRects}) {
    const itemsByDeck = groupBy(items, 'deck');
    // console.log(itemsByDeck);
    return(
        <ul>
            {Object.keys(itemsByDeck).map((deck, index)=>{
                console.log('Группа:', itemsByDeck[deck]);
                const data = itemsByDeck[deck];
                return(
                    <Link key={deck} deck = {deck} data = {data} setActiveDeck={setActiveDeck} setPlaneRects={setPlaneRects} />
                )
            })}
        </ul>
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
            <li key={this.props.deck}><a data-toggle="modal" data-target="#MapModal" onClick={this.handleClick}>{deckName}<span className="label badge">{this.props.data.length} шт.</span></a></li>
        )
    }
}

// Link.propTypes = {
//     data: PropTypes.array.isRequired
// };

export default PositionLinks