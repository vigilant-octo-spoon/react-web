import React, { Component } from 'react';
import { connect } from 'react-redux';

import LoginForm from '../components/LoginForm.js';

class LoginPage extends Component {
    render() {
        return (
            <div>
                <h1>LoginPage</h1>
                <LoginForm />
            </div>

        )
    }
}

const mapStateToProps = state => {
    return {

    }
}

export default connect(mapStateToProps)(LoginPage);