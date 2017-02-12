import {combineReducers} from 'redux'

import tableData from './tableDataReducer'
import filter from './filterReducer'
import planeData from './planeSVGReducer'

export default combineReducers({
    tableData,
    filter,
    planeData
    // activeDeck,
    // filterText,
    // rects
})