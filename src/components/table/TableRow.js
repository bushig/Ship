import React from 'react'
const PropTypes = React.PropTypes;

import PositionLinks from './PositionLinks'

function TableRow({data, setActiveDeck, setPlaneRects}) {
    // console.log('Данные ряда: ',data);
    const itemsCount = data.items.length;
    const unitMass = data.mass;
    return(
        <tr>
            <td scope="row" className="col-md-1">{data.index}</td>
            <td className="col-md-5">{data.title}</td>
            <td className="col-md-1">{itemsCount}</td>
            <td className="col-md-1">{unitMass}</td>
            <td className="col-md-1">{unitMass * itemsCount}</td>
            <td className="col-md-3">
                <PositionLinks setActiveDeck={setActiveDeck} setPlaneRects={setPlaneRects} type={data.index} items={data.items}/>
            </td>
        </tr>
    )
}

export default TableRow