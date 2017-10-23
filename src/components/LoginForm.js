import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


class LoginForm extends Component {

	render() {
	    return (
	      	<div className="LoginForm">	        	
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
		        <p className="register-p"> ¿No tienes una cuenta? <a href="#">Registrate</a></p>
	    	</div>

	    )
	}
}

export default LoginForm;
