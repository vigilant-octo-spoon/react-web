import React, { Component } from 'react';
import '../styles/Steps.css';


class RecursosView extends Component {


	render() {

	    return (
        <div id={ this.props.id }>
          <h3> Recursos </h3>
          <ol>
            {this.props.recursos.map((rec) => 
                <li>
                  <span className="item-title"> {rec.item}: </span><p> Disponible: {rec.available}, Adquisición: {rec.acquisition} </p>
                </li>
            )}
          </ol>
          <div className="conditions">
            <h4> Condiciones necesarias </h4>
            <ol >
              {this.props.conditions.map((cond) => 
                  <li>
                    <span className="item-title">{cond.item}:</span> <p> Disponible: {cond.info} </p>
                  </li>
              )}
            </ol>
          </div>
      </div>
	    )
	}
}

export default RecursosView;