import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


class LoginForm extends Component {

	render() {
	    return (
	      	<div className="LoginForm">	        	
        		<h1 className="LoginForm">Login</h1>
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
		        <RaisedButton className="submit-button" label="Submit" onClick={ this.props.onSubmit } />
	    	</div>

	    )
	}
}

export default LoginForm;
