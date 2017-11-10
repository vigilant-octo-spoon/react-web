import React, { Component } from 'react';
import { connect } from "react-redux";

import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import PlanificarView from '../components/PlanificarView.js'
import RecursosView from '../components/RecursosView.js'
import DifusionView from '../components/DifusionView.js'
import BitacoraView from '../components/BitacoraView.js'
import EvaluationView from '../components/EvaluationView.js'
import ReportView from '../components/ReportView.js'

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
              <RecursosView recursos={[{item: 'caca', available:'sí', acquisition: 'ya adquerido'},
                                      {item: 'pico', available:'no', acquisition: 'se espera que el colegio coopere'}]}
                            id="recursos-view"
                            conditions={[{
                                "item": "Permisos para salir del colegio",
                                "info": "Enviar solicitud a los padres para que permitan la escurcion al museo"},
                                {"item": "Fijar una fecha",
                                "info": "Encontrar el mejor dia con la secretaria docente, en el que puedan salir toda la jornada"}]}
              />
              <DifusionView broadcast={[
                                          {
                                            "moment_of_implementation": "Antes",
                                            "audience": "Alumnos",
                                            "diffusion_channel": "Comunicacion",
                                            "objective": "Informar de la salida al museo"
                                          },
                                          {
                                            "moment_of_implementation": "Durante",
                                            "audience": "Alumnos",
                                            "diffusion_channel": "Guia de trabajo",
                                            "objective": "Entregar y presentar el proyecto"
                                          },
                                          {
                                            "moment_of_implementation": "Despues",
                                            "audience": "Alumnos",
                                            "diffusion_channel": "Auto Evaluacion",
                                            "objective": "Que evaluen su propio desempeño y el proyecto"                                          },
                                        ]}
                            id="recursos-view"
              />   
            <Divider />
            <CardTitle title="Paso 4: Implementación" />  
              <BitacoraView binnacles={[{
                "start_date": "2017-10-23",
                "finish_date": "2017-10-23",
                "objectives": "Presentar metodologia",
                "observations": "Los alumnos se comportaron muy bien en las presentaciones, parecian interesados.....",
                "advances": "Las cosas han ido bien, destacamos que......",
                "obstacles": "Un grupo pequeño no puede unirse a la salida al museo por indicacion de sus padres, hay que ver como solucionar esto.",
                "ideas": "Pedirles a los alumnos que lleven camara, ademas podemos hacer algun tipo de juego en la salida al museo."
                  }]}
                />
            <Divider />
            <CardTitle title="Paso 5: Evaluación" />  
              <EvaluationView evaluation={[{
                            comments_connect: "Opinion de la primera etapa de ver y conocer las metodologias disponibles",
                            comments_select: "Opinion de la segunda etapa de elegir metodologia",
                            comments_planning: "Opinion de la 3° etapa de planificar todo el proceso",
                            comments_implementation: "Opinion  de la 4° etapa de la implementacion, que mejorar, que funciono...",
                            users_reflection: "Reflecciones de los usuarios de la innovacion, ordenar sus ideas aca.",
                            users_suggestions: "Sugerencias de los usuarios de la innovacion" 
                            }]}
                />
            <Divider />
            <CardTitle title="Paso 6: Comunicar" />  
              <ReportView report={[{
                             "comment": "Esta es la etapa 6 de comunicar, agrgando un comentario final de la opinion y el desarrollo de la metodologia."
                            }]}
                />





                <CardActions>
                  <FlatButton label="Action 1" />
                  <FlatButton label="Action 2" />
                </CardActions>
            }
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
