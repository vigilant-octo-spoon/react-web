import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import PlanificarView from '../components/PlanificarView.js'
import RecursosView from '../components/RecursosView.js'

import '../styles/Steps.scss';

class StepsContainer extends Component {
    render() {
        return (
            <div id="steps-container">
                <Card >
                <CardTitle title="Methodology title" subtitle="User Name - User email" />
                <Divider />
                <CardTitle title="Planificación" />  
                <PlanificarView title="Nombre de la iniciativa"
                                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat."
                />
                <PlanificarView title="Objetivo"
                                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat."
                />
                <PlanificarView title="Lugar de implementación"
                                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat."
                />
                <PlanificarView title="Inicio - Término"
                                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat."
                />
                <PlanificarView title="Equipo de trabajo"
                                members={["carlos - jefe de grupo", "rodolfo - junior"]}
                                id="team-view"
                />
                <RecursosView recursos={[{item: 'caca', available:'sí', acquisition: 'ya adquerido'},
                                        {item: 'pico', available:'no', acquisition: 'se espera que el colegio coopere'}]}
                />
                    
                
                    
                    <CardActions>
                    <FlatButton label="Action 1" />
                    <FlatButton label="Action 2" />
                    </CardActions>
                </Card>
            </div>
        )
    }
}


export default StepsContainer;
