import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import UploadFile from './UploadFile';

export class UserForm extends Component {
    state = {
        step: 1,
        // firstName: '',
        // lastName: ''
    }
    // proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }
    // Go back tp prev step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }
    // handle fields change
    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    }
    render() {
        const { step } = this.state;
        const { firstName, lastName } = this.state;
        const values = { firstName, lastName }

        switch (step) {
            case 1:
                return (
                    <FormUserDetails
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 2:
                return (
                    <FormPersonalDetails
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
                case 3:
                return (
                    <UploadFile
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                        />
                );
            case 4:
                return <h3>Success <h5>we will verify soon...</h5></h3>

          
        }
    }
}

export default UserForm
