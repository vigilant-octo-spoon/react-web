import React, { Component } from 'react';
import '../styles/Steps.scss';


class EvaluationView extends Component {


	render() {

	    return (
        <div id={ this.props.id }>
          <h3> Evaluación </h3>
          <ul>
            {this.props.evaluation.map((ev) => 
                <div>
                  <p><span>Conectar: </span> {ev.comments_connect}</p>
                  <p><span>Seleccionar: </span> {ev.comments_select}</p>
                  <p><span>Planificación: </span> {ev.comments_planning}</p>
                  <p><span>Implementación: </span> {ev.comments_implementation}</p>
                  <p><span>Reflexión: </span> {ev.users_reflection}</p>
                  <p><span>Sugenrencias: </span> {ev.users_suggestions}</p>
                </div>
            )}
          </ul>
      </div>
	    )
	}
}

export default EvaluationView;