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
						<form onSubmit={ this.props.onSubmit }>
							<TextField
								hintText="Enter your email"
								floatingLabelText="Email"
								name="email"
								onChange={ this.props.onChange }
							/>
							<br/>
							<TextField
								type="password"
								hintText="Enter your Password"
								floatingLabelText="Password"
								name="password"
								onChange={ this.props.onChange }
							/>
							<br/>
							<RaisedButton label="Submit" onClick={ this.props.onSubmit } />
						</form>
		          	</div>
		  	  	</MuiThemeProvider>
	    	</div>

	    )
	}
}

export default LoginForm;