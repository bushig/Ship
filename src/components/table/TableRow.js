import React from 'react'
const PropTypes = React.PropTypes;

import PositionLinks from './PositionLinks'

function TableRow({data, setActiveDeck, setPlaneRects}) {
    // console.log('Данные ряда: ',data);
    const itemsCount = data.items.length;
    const unitMass = data.mass;
    return(
        <tr>
            <td>{data.index}</td>
            <td>{data.title}</td>
            <td>{itemsCount}</td>
            <td>{unitMass}</td>
            <td>{unitMass * itemsCount}</td>
            <td>
                <PositionLinks setActiveDeck={setActiveDeck} setPlaneRects={setPlaneRects} items={data.items}/>
            </td>
        </tr>
    )
}

export default TableRow