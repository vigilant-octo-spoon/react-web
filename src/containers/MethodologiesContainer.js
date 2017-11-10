import React, { Component } from 'react';
import { connect } from 'react-redux';
import List from 'material-ui/List';

import MethodologyView from '../components/MethodologyView.js';
import MethodologiesList from '../components/MethodologiesList.js';
import MethodologiesComment from '../components/MethodologiesComment.js';

class MethodologiesContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            drawerOpen: false,
        }

        this.toggleDrawer = this.toggleDrawer.bind(this);
    }

    toggleDrawer() {
        this.setState({ drawerOpen: !this.state.drawerOpen });
    }

    render() {
        return (
            <div>
            <MethodologyView />
            <MethodologiesList />
            <h2> Comentarios</h2> 
            <List>
                <MethodologiesComment />
            </List>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {

    }
}

export default connect(mapStateToProps)(MethodologiesContainer);