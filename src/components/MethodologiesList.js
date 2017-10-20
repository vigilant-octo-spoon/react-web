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
		          primaryText="Brunch this weekend?"
		          secondaryText={
		            <p>
		              <span style={{color: darkBlack}}>Brendan Lim</span> --
		              I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
		            </p>
		          }
		          secondaryTextLines={2}
		        />
		        <Divider inset={true} />
		        <ListItem
		          leftAvatar={<Avatar src="images/kolage-128.jpg" />}
		          primaryText={
		            <p>Summer BBQ&nbsp;&nbsp;<span style={{color: lightBlack}}>4</span></p>
		          }
		          secondaryText={
		            <p>
		              <span style={{color: darkBlack}}>to me, Scott, Jennifer</span> --
		              Wish I could come, but I&apos;m out of town this weekend.
		            </p>
		          }
		          secondaryTextLines={2}
		        />
		        <Divider inset={true} />
		        </List>
		        <h2> Metodologías Terminadas</h2> 
		        <List>
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
		        <ListItem
		          leftAvatar={<Avatar src="images/kerem-128.jpg" />}
		          primaryText="Birdthday gift"
		          secondaryText={
		            <p>
		              <span style={{color: darkBlack}}>Kerem Suer</span> --
		              Do you have any ideas what we can get Heidi for her birthday? How about a pony?
		            </p>
		          }
		          secondaryTextLines={2}
		        />
		        <Divider inset={true} />
		        <ListItem
		          leftAvatar={<Avatar src="images/raquelromanp-128.jpg" />}
		          primaryText="Recipe to try"
		          secondaryText={
		            <p>
		              <span style={{color: darkBlack}}>Raquel Parrado</span> --
		              We should eat this: grated squash. Corn and tomatillo tacos.
		            </p>
		          }
		          secondaryTextLines={2}
		        />
		      </List>
		    </div>
	    )
	}
}

export default MethodologiesList;