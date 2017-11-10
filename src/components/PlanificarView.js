import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';

import '../styles/Steps.css';


const divStyle = {
  'marginTop': 0,
  'paddingTop': 0,
  'marginBottom': 0,
  'paddingBottom': 0
};

class PlanificarView extends Component {


	render() {

	    return (
        <div id={ this.props.id } style={divStyle} >
	      	<List className="planificar-list">
            <ListItem
              className="list-item"
              primaryText={ this.props.title }
              secondaryText={ this.props.members ? "" : <p> {this.props.text} </p> }
            />
          </List>
              { this.props.members && 
                <ol className="members-list">
                {
                  this.props.members.map((member) =>
                    <li> 
                      <span className="item-title"> {member.name} </span>: <p>{member.role} </p>
                     </li>
                  )
                }
                </ol>
              }
      </div>
	    )
	}
}

export default PlanificarView;