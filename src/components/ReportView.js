import React, { Component } from 'react';
import '../styles/Steps.scss';


class ReportView extends Component {


	render() {

	    return (
        <div id={ this.props.id }>
          <h3> Reporte </h3>
          <ul>
            {this.props.report.map((rep) => 
                <li>
                	<p>{rep.comment}</p>
                </li>
            )}
          </ul>
      </div>
	    )
	}
}

export default ReportView;