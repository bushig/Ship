import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import Modal from '../components/Modal'

import {setPlaneColor} from '../actions/planeAction'


function mapDispatchToProps(dispatch) {
    return bindActionCreators({setPlaneColor
    }, dispatch)
}

const mapStateToProps = (state) => {
    console.log('State:', state);
    return {
        deck: state.planeData.deck,
        rects: state.planeData.rects,
        inverted: state.planeData.inverted
    }
};

const ModalContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Modal);
module.exports = ModalContainer;