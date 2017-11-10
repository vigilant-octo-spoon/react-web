import React, { Component } from 'react';
import '../styles/Steps.scss';


class ReportView extends Component {


	render() {

	    return (
        <div id={ this.props.id }>
          <h3> Reporte </h3>
          <ul>
            {this.props.report.map((rep) => 
                <div>
                	<p>{rep.comment}</p>
                </div>
            )}
          </ul>
      </div>
	    )
	}
}

export default ReportView;