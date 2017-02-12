import React from 'react'
import {connect} from 'react-redux'

import Table from '../components/table/Table'
import {bindActionCreators} from 'redux'

import {setActiveDeck, setPlaneRects} from '../actions/planeAction'


const getVisibleTableList = (fullList, range, text) => { // TODO: Optimize, refactor
    console.log('TEXT:', text);
    if (range && range.length === 2 && text){
        console.log('Фильтруем');
        return fullList.filter(function(item) {
            return range[0] <= item.index && item.index<range[1]+1 && item.title.toLowerCase().includes(text.toLowerCase());
        })
    } else {
        console.log('не Фильтруем');
        return fullList
    }
};

const mapStateToProps = (state) => {
    console.log('State:', state);
    return {
        visibleTableList: getVisibleTableList(state.tableData, state.filter.range, state.filter.text)
    }
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({setActiveDeck, setPlaneRects
    }, dispatch)
}

const TableContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Table);

module.exports = TableContainer;