import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import Modal from '../components/Modal'

// import {setFilterText, setFilterRange} from '../actions/filterAction'


// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({setFilterRange, setFilterText
//     }, dispatch)
// }

const mapStateToProps = (state) => {
    console.log('State:', state);
    return {
        deck: state.planeData.deck,
        rects: state.planeData.rects
    }
};

const ModalContainer = connect(
    mapStateToProps
    // mapDispatchToProps
)(Modal);
module.exports = ModalContainer;