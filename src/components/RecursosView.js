import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import '../styles/Steps.scss';


class RecursosView extends Component {


	render() {

	    return (
        <div id={ this.props.id }>
          <h3> Recursos </h3>
          <ol>
            {this.props.recursos.map((rec) => 
                <li>
                  <span className="item-title"> {rec.item} </span>: <p>Disponible: {rec.available}, Adquisición: {rec.acquisition} </p>
                </li>
            )}
          </ol>
      </div>
	    )
	}
}

export default RecursosView;