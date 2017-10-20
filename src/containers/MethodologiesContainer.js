import React, { Component } from 'react';
import { connect } from 'react-redux';

import MethodologyView from '../components/MethodologyView.js';

class MethodologiesContainer extends Component {
    render() {
        return (
            <div>
            <MethodologyView />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {

    }
}

/*export default connect(mapStateToProps)(LoginPage);*/
export default MethodologiesContainer