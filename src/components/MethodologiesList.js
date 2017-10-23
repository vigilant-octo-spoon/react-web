import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import {darkBlack, lightBlack} from 'material-ui/styles/colors';

class MethodologiesList extends Component {

	render() {
	    return (
	    	<div>
	    	  <h2> Metodologías Activas</h2> 
		      <List>
		        <ListItem
		          leftAvatar={<Avatar src="images/ok-128.jpg" />}
		          primaryText="Metodología 1"
		          secondaryText={
		            <p>
		              I'll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
		            </p>
		          }
		          secondaryTextLines={2}
		        />
		        <Divider inset={true} />
		        </List>
		    </div>
	    )
	}
}

export default MethodologiesList;