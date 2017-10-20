import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class LoginForm extends Component {

	render() {
	    return (
	      	<div>
	        	<div>
	        		<h1> Login </h1>
		           	<TextField
	            		 hintText="Enter your Username"
			             floatingLabelText="Username"
			        />
			        <br/>
			        <TextField
			  	     	type="password"
			         	hintText="Enter your Password"
			            floatingLabelText="Password"
			        />
			        <br/>
			        <RaisedButton label="Submit" onClick=""/>
	          	</div>
	    	</div>

	    )
	}
}

export default LoginForm;