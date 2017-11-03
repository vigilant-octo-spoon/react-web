import React from "react";
import PropTypes from "prop-types";
import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";

// Based on: https://gist.github.com/fdidron/ebcf52dc1ed62ff7d80725854d631a9e

const LOGIN_PATH = "/login";

const AuthRoute = ({component, ...props}) => {
    const { isPublic } = component;
    if(props.isAuthenticated) {
        // User authenticated.
        return <Route { ...props } component={ component } />;
    } else {
        // User not authenticated.
        if(!isPublic) {
            return <Redirect to={ LOGIN_PATH } />;
        } else {
            return <Route { ...props } component={ component } />;
        }
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: !!state.user.authentication_token,
    }
}

export default connect(mapStateToProps)(AuthRoute);