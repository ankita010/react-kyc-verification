import React, { Component } from 'react';
import MuiThemeProvider from
    'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/FlatButton'

import CardContent from 'material-ui/FlatButton'
import { FlatButton } from 'material-ui';

export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };
    render() {
        const { values, handleChange } = this.props;

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <h4>Select Verification Proof</h4>

                    <FlatButton

                        label="Aadhaar Card"
                        primary={true}
                        // style={styles.button}
                        onClick={this.continue}

                    />
                    <br />
                    <FlatButton

                        label="Passport"
                        primary={true}
                        // style={styles.button}
                        onClick={this.continue}

                    />
                    <br />
                    <FlatButton

                        label="Driving licence"
                        primary={true}
                       
                        size="large"
                        // style={styles.button}
                        onClick={this.continue}

                    />



                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

export default FormUserDetails;
