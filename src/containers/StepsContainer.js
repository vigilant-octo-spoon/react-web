import React, { Component } from 'react';
import { connect } from "react-redux";

import { Card, CardTitle } from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import PlanificarView from '../components/PlanificarView.js'
import RecursosView from '../components/RecursosView.js'
import DifusionView from '../components/DifusionView.js'
import BitacoraView from '../components/BitacoraView.js'
import EvaluationView from '../components/EvaluationView.js'
import ReportView from '../components/ReportView.js'

import '../styles/Steps.css';

class StepsContainer extends Component {
    render() {
        const { follow, user } = this.props;
        return (
            <div id="steps-container">
                <Card >
                <CardTitle title={ follow.name } subtitle={`${user.name} - ${user.email}`} />
                <Divider />

                { follow.step > 3 &&
                <div>
                
                <CardTitle title="Paso 3: Planificación" />  
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
                                members={follow.step3.work_roles.map((work_role) => {
                                    return { name: work_role.name, role: work_role.role }
                                })}
                                id="team-view"
                />
                <RecursosView
                    id="recursos-view"
                    recursos={
                        follow.step3.resources.map((resource) => {
                            return {
                                item: resource.item,
                                available: resource.available ? "sí" : "no",
                                acquisition: resource.acquisition,
                            }
                        })
                    }
                    conditions={
                        follow.step3.conditions.map((condition) => {
                            return {
                                item: condition.item,
                                info: condition.info,
                            }
                        })
                    }
                />

              <DifusionView
                broadcast={ follow.step3.broadcasts }
                id="recursos-view"
              />   
            <Divider />
            </div>
            }
            { follow.step > 4 &&
            <div>
            <CardTitle title="Paso 4: Implementación" />  
              <BitacoraView binnacles={ follow.step4.binnacles }
              id="bitacora-view"
                />
            <Divider />
            </div>
            }
            { follow.step > 5 &&
            <div>
            <CardTitle title="Paso 5: Evaluación" />  
              <EvaluationView evaluation={[ follow.step5.evaluation ]}
              id="bitacora-view"
                />
            <Divider />
            </div>
            }
            { follow.step > 6 &&
            <div>
            <CardTitle title="Paso 6: Comunicar" />  
              <ReportView report={[ follow.step6.report ]}
              id="bitacora-view"
                />
            </div>
            }
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
