import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navbar from '../components/Navbar.js';


class NavbarContainer extends Component {
    render() {
        return (
            <div>
            	<Navbar />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {

    }
}

/*export default connect(mapStateToProps)(LoginPage);*/
export default NavbarContainer