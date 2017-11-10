import React, { Component } from 'react';
import { connect } from "react-redux";
import { push } from "react-router-redux";

import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import { ToolbarGroup } from 'material-ui/Toolbar';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import {CardTitle} from 'material-ui/Card';

import { destroySession } from "../actions/user.js";


class Navbar extends Component {

	constructor(props) {
		super(props);

		this.state = {
			open: false
		}

		this.handleExperienceClick = this.handleExperienceClick.bind(this);
		this.handleLogoutClick = this.handleLogoutClick.bind(this);
	}

	handleExperienceClick() {
		const { dispatch } = this.props;
		dispatch(push("/dashboard"));
		this.handleToggle();
	}

	handleLogoutClick() {
		const { dispatch } = this.props;
		dispatch(destroySession());
	}

	handleToggle(){
		this.setState({open: !this.state.open})
	}

	handleClose = () => this.setState({open: false});

	render() {
		const { user } = this.props;
	    return (
	      	<div>
        		<AppBar
           			title="Red Lab Sur"
           			onLeftIconButtonTouchTap={this.handleToggle.bind(this)}
           			iconElementRight={<ToolbarGroup>
           									<RaisedButton label="Salir"
           												  onClick={ this.handleLogoutClick }
           												  />
           							  </ToolbarGroup>}
	           	/>
	            <Drawer 
		        	docked={false}
          			width={200}
          			open={this.state.open}
          			onRequestChange={(open) => this.setState({open})}
		        >
		          <CardTitle title={`${user.name} ${user.last_name}`} subtitle={ user.email } />
		          <Divider/>
		          <MenuItem onClick={this.handleExperienceClick}>Experiencias</MenuItem>
		          <Divider/>
		          <MenuItem onClick={this.handleLogoutClick}>Cerrar sesión</MenuItem>
		        </Drawer>
	    	</div>
	    )
	}
}

const mapStateToProps = (state) => {
	return {
		user: state.user,
	}
}

export default connect(mapStateToProps)(Navbar);