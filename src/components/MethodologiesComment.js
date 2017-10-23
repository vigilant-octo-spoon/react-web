import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import {darkBlack, lightBlack} from 'material-ui/styles/colors';


class MethodologiesComment extends Component {
	render() {
		return (
		<div>
			<ListItem
			  leftAvatar={<Avatar src="images/uxceo-128.jpg" />}
			  primaryText="Oui oui"
			  secondaryText={
			    <p>
			      <span style={{color: darkBlack}}>Grace Ng</span> --
			      Do you have Paris recommendations? Have you ever been?
			    </p>
			  }
			  secondaryTextLines={2}
			/>
			<Divider inset={true} />
		</div>
		)
	}
}

export default MethodologiesComment;