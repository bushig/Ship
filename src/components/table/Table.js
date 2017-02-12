import React, {PropTypes} from 'react'
import TableRow from './TableRow'

function Table({visibleTableList, setActiveDeck, setPlaneRects}) {
    console.log('visible:', visibleTableList);
    return (
        visibleTableList.length != 0 ? (
                <table className="table table-bordered table-striped table-fixed-header">
                    <thead className="header">
                    <tr>
                        <th>ПОЗ.</th>
                        <th>НАИМЕНОВАНИЕ</th>
                        <th>КОЛ.</th>
                        <th>МАССА ЕД, кг</th>
                        <th>МАССА ОБЩ, кг</th>
                        <th>РАСПОЛОЖЕНИЕ</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        visibleTableList.map(function (item) {
                            return <TableRow setActiveDeck={setActiveDeck} setPlaneRects={setPlaneRects} key={item.index} data={item}/>
                        })
                    }
                    </tbody>
                </table>) :
            <h1 style={{textAlign: "center"}}>Нет данных</h1>
    )
}

// Table.propTypes = {
//     visibleTableList: PropTypes.arrayOf(PropTypes.shape({
//         index: PropTypes.number.isRequired,
//         title: PropTypes.string.isRequired,
//         mass: PropTypes.number.isRequired,
//         items: PropTypes.arrayOf(PropTypes.shape({
//             deck: PropTypes.number.isRequired,
//             position: PropTypes.arrayOf(React.PropTypes.number)
//         }).isRequired).isRequired
//     }).isRequired).isRequired,
// onPositionLinkClick: PropTypes.func.isRequired
// };


module.exports = Table;