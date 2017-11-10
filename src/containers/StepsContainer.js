import React, { Component } from 'react';
import { connect } from "react-redux";

import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import PlanificarView from '../components/PlanificarView.js'
import RecursosView from '../components/RecursosView.js'

import '../styles/Steps.scss';

class StepsContainer extends Component {
    render() {
        const { follow, user } = this.props;
        return (
            <div id="steps-container">
                <Card >
                <CardTitle title={ follow.name } subtitle={`${user.name} - ${user.email}`} />
                <Divider />
                <CardTitle title="Planificación" />  
                <PlanificarView title="Nombre de la iniciativa"
                                text={ follow.step3.planning.initiative_name }
                />
                <PlanificarView title="Objetivo"
                                text={ follow.step3.planning.objective }
                />
                <PlanificarView title="Lugar de implementación"
                                text={ follow.step3.planning.place }
                />
                <PlanificarView title="Inicio - Término"
                                text={ `${follow.step3.planning.start_date} - ${follow.step3.planning.finish_date}` }
                />
                <PlanificarView title="Equipo de trabajo"
                                members={follow.step3.work_roles.map((work_role) => `${work_role.name} - ${work_role.role}`)}
                                id="team-view"
                />
                <RecursosView
                    recursos={
                        follow.step3.resources.map((resource) => {
                            return {
                                item: resource.item,
                                available: resource.available ? "sí" : "no",
                                acquisition: resource.acquisition,
                            }
                        })
                    }
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

const getFollowById = (follows, followId) => {
    for(const user of follows.users) {
        for(const follow of user.follows) {
            if(follow.id === followId) {
                return {
                    follow,
                    user: {
                        name: `${user.name} ${user.last_name}`,
                        firstName: user.name,
                        lastName: user.last_name,
                        email: user.email,
                    }
                }
            }
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    const followId = parseInt(ownProps.match.params.followId, 10);
    const { user, follow } = getFollowById(state.follows, followId);
    return {
        user,
        follow,
    }
}

export default connect(mapStateToProps)(StepsContainer);