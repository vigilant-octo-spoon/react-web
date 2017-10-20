import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class MethodologyView extends Component {

	render() {
	    return (
	      	<Card >
	      	<CardTitle title="Methodology title" subtitle="Methodology subtitle" />
		        
		        <CardHeader
      				title="Descripción"
      			/>
		        <CardText >
		          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
		          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
		          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
		          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
		        </CardText>
		        <CardHeader
      				title="Organización"
      			/>
		        <CardText >
		          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
		          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
		          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
		          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
		        </CardText>
		        <CardHeader
      				title="Categoría"
      			/>
		        <CardText >
		          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
		          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
		          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
		          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
		        </CardText>
		        <CardActions>
		          <FlatButton label="Action 1" />
		          <FlatButton label="Action 2" />
		        </CardActions>
      		</Card>
	    )
	}
}

export default MethodologyView;