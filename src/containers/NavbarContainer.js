import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import Navbar from '../components/navbar/Navbar'

import {setFilterText, setFilterRange} from '../actions/filterAction'


function mapDispatchToProps(dispatch) {
    return bindActionCreators({setFilterRange, setFilterText
    }, dispatch)
}

const NavbarContainer = connect(
    undefined,
    mapDispatchToProps
    //actionSetText, actionSetRange
)(Navbar);
module.exports = NavbarContainer;