import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import {CardTitle} from 'material-ui/Card';




class ProfileView extends Component {

	constructor(props) {
    	super(props);
    	this.state = {open: false};
  	}

 	handleToggle = () => this.setState({open: !this.state.open});

  	handleClose = () => this.setState({open: false});

	render() {
	    return (
	      	<div>
			    <RaisedButton
			    docked={false}
		          label="Perfil (en la navbar)"
		          onClick={this.handleToggle}
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
		          <MenuItem onClick={this.handleClose}>Equipos</MenuItem>
		          <MenuItem onClick={this.handleClose}>Ir al Librillo</MenuItem>
		          <Divider/>
		          <MenuItem onClick={this.handleClose}>Cerrar sesisón</MenuItem>
		        </Drawer>
	    	</div>
	    )
	}
}

export default ProfileView;