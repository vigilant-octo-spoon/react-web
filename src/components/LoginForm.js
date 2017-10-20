import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class LoginForm extends Component {

	render() {
	    return (
	      	<div>
	        	<div>
	        		<h1>Login</h1>
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
	          	</div>
	    	</div>

	    )
	}
}

export default LoginForm;