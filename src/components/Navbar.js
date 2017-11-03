import React, { Component } from 'react';
import { connect } from 'react-redux';

import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import {CardTitle} from 'material-ui/Card';


class Navbar extends Component {

	constructor(props) {
		super(props);

		this.state = {
			open: false
		}

		this.changeLoginButtonVisibility = this.changeLoginButtonVisibility.bind(this);
	}

	changeLoginButtonVisibility() {
		this.setState({ showLoginButton : !this.state.showLoginButton });
	}

	handleToggle(){
		this.setState({open: !this.state.open})
	}

	handleClose = () => this.setState({open: false});

	render() {
	    return (
	      	<div>
        		<AppBar
           			title="Red Lab Sur"
           			onLeftIconButtonTouchTap={this.handleToggle.bind(this)}
           			iconElementRight={<ToolbarGroup>
           				       			{ !this.props.logged && 
           									<RaisedButton label="Ingresar"
           												  onClick={ this.changeLoginButtonVisibility }
           												  />
           								}
           								{ this.props.logged && 
           									<RaisedButton label="Salir"
           												  onClick={ this.changeLoginButtonVisibility }
           												  />
           								}
           							  </ToolbarGroup>}
	           	/>
	            <Drawer 
		        	docked={false}
          			width={200}
          			open={this.state.open}
          			onRequestChange={(open) => this.setState({open})}
		        >
		          <CardTitle title="Carlos Alvarez" subtitle="ctalvarez@uc.cl" />
		          <Divider/>
		          <MenuItem onClick={this.handleClose}>Metodologías</MenuItem>
		          <MenuItem onClick={this.handleClose}>Ir al Librillo</MenuItem>
		          <Divider/>
		          <MenuItem onClick={this.handleClose}>Cerrar sesisón</MenuItem>
		        </Drawer>
	    	</div>
	    )
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		logged: state.logged,
	}
}

export default connect(mapStateToProps)(Navbar);