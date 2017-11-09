import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import '../styles/Steps.scss';

class StepsContainer extends Component {

    render() {
        return (
            <Card >
            <CardTitle title="Methodology title" subtitle="User Name - User email" />
                
                <CardHeader
                    title="Planificación"
                    subtitle="dasfadsf"
                    className="subtitle-card"
                />
                <div className="ctm">dasfadsf</div>                
                <CardText >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                  Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                  Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </CardText>
                <CardHeader
                    title="Organización"
                />
                <CardText >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                  Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                  Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </CardText>
                <CardHeader
                    title="Categoría"
                />
                <CardText >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                  Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                  Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </CardText>
                <CardActions>
                  <FlatButton label="Action 1" />
                  <FlatButton label="Action 2" />
                </CardActions>
            </Card>
        )
    }
}


export default StepsContainer;