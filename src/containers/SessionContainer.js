import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import '../styles/Session.scss';

import { postLogin } from '../actions/user.js';
import LoginForm from '../components/LoginForm.js';


class SessionContainer extends Component {

    static isPublic = true;

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
            dispatch(push("/methodologies"));
        }).catch((error) => {
            console.log(error);
        });
    }

    render() {
        return (
            <div className="SessionContainer">
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

export default connect(mapStateToProps)(SessionContainer);