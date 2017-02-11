import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

export default class DrawerOpenRightExample extends React.Component {

    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    handleToggle() {
        this.setState({open: !this.state.open});
    }

    render() {
        return (
            <div>
                <button onClick={this.handleToggle}>Toggle Drawer</button>
                <Drawer width={200} openSecondary={true} open={this.state.open} >
                    <AppBar title="AppBar" />
                </Drawer>
            </div>
        );
    }
}