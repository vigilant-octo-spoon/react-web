import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import '../styles/Steps.css';


class DifusionView extends Component {


	render() {

	    return (
        <div id={ this.props.id }>
          <h3> Difusión </h3>
          <ul>
            {this.props.broadcast.map((broadcast) => 
                <li>
                  <span className="item-title"> {broadcast.moment_of_implementation} </span>:
                  <p>Audiencia: {broadcast.audience}, Adquisición: {broadcast.diffusion_channel}, Objetivo: {broadcast.objective} </p>
                </li>
            )}
          </ul>
      </div>
	    )
	}
}

export default DifusionView;