import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Nav from '../components/Nav';

export default class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <Nav />
                    {this.props.children}
                </div>
            </MuiThemeProvider>
        )
    }
}
