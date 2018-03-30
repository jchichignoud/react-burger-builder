import React, { Component } from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import classes from './Layout.css';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: true
    }
    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false})
    }

    render() {
        return ([
            <Toolbar key='1'/>,
            <SideDrawer key='2' open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>,
            <main key='3'className={classes.Content}>
            {this.props.children}
            </main>
        ])
    }
}

export default Layout;