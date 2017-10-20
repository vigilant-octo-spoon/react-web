import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProfileView from '../components/ProfileView.js';


class ProfileContainer extends Component {
    render() {
        return (
            <div>
            	<ProfileView />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {

    }
}

/*export default connect(mapStateToProps)(LoginPage);*/
export default ProfileContainer