import React, { Component } from 'react';
import { connect } from 'react-redux';

import { postLogin } from '../actions/user.js';
import LoginForm from '../components/LoginForm.js';

class LoginContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                email: '',
                password: '',
            }
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(event) {
        const { target } = event;
        const { user } = this.state;
        user[target.name] = target.value;
        this.setState({ user });
    }

    onSubmit(event) {
        event.preventDefault();
        const { dispatch } = this.props;
        const { user } = this.state;
        dispatch(postLogin(user.email, user.password)).then((response) => {
            console.log(response);
        });
    }

    render() {
        return (
            <div>
                <LoginForm
                    onChange={ this.onChange }
                    onSubmit={ this.onSubmit }
                />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {

    }
}

export default connect(mapStateToProps)(LoginContainer);