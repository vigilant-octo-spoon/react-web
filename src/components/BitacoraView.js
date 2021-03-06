import React, { Component } from 'react';
import '../styles/Steps.css';


class BitacoraView extends Component {


	render() {

	    return (
        <div id={ this.props.id }>
          <h3> Bitácora </h3>
          <ul>
            {this.props.binnacles.map((binnacles) => 
                <div>
                  <span className="item-title"> Fecha: {binnacles.start_date} - {binnacles.finish_date}</span>:
                  <p><span>Objetivos: </span> {binnacles.objectives}</p>
                  <p><span>Observaciones: </span> {binnacles.observations}</p>
                  <p><span>Avances: </span> {binnacles.advances}</p>
                  <p><span>Obstáculos: </span> {binnacles.obstacles}</p>
                  <p><span>Ideas: </span> {binnacles.ideas}</p>
                </div>
            )}
          </ul>
      </div>
	    )
	}
}

export default BitacoraView;