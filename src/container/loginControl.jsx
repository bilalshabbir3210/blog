import React, { Component } from 'react';
import LoginForm from '../components/loginForm';

class LoginControl extends Component {
    constructor() {
        super();
        this.state = { 

         }
    }
    render() { 
        return ( 
            <React.Fragment>
                <LoginForm />
            </React.Fragment>
         );
    }
}
 
export default LoginControl;