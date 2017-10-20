import React, { Component } from 'react';
import { connect } from 'react-redux';

import LoginForm from '../components/LoginForm.js';

class LoginContainer extends Component {
    render() {
        return (
            <div>
                <LoginForm />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {

    }
}

/*export default connect(mapStateToProps)(LoginPage);*/
export default LoginContainer