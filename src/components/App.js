var React = require('react');
import Content from './Content'
import TableContainer from '../containers/TableContainer'
import NavbarContainer from "../containers/NavbarContainer"
import ModalContainer from '../containers/ModalContainer'

var App = React.createClass({
    // console.log()
    render: function () {
        return (
            <div>
                <NavbarContainer />
                <Content>
                    <TableContainer />
                    <ModalContainer></ModalContainer>
                </Content>
            </div>
        );
    }
});

module.exports = App;