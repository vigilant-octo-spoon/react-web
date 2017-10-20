import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class LoginForm extends Component {

	render() {
	    return (
	      	<div>
		      	<MuiThemeProvider>
		        	<div>
		        		<AppBar
		           		title="Login"
			           	/>
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
		  	  	</MuiThemeProvider>
	    	</div>

	    )
	}
}

export default LoginForm;