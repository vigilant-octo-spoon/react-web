import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import {darkBlack, lightBlack} from 'material-ui/styles/colors';

import '../styles/Steps.scss';


class PlanificarView extends Component {

	render() {
	    return (
	      	<List>
                <ListItem
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
	    )
	}
}

export default PlanificarView;