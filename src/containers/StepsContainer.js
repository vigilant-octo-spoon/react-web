import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import PlanificarView from '../components/PlanificarView.js'
import RecursosView from '../components/RecursosView.js'
import DifusionView from '../components/DifusionView.js'
import BitacoraView from '../components/BitacoraView.js'

import '../styles/Steps.scss';

class StepsContainer extends Component {

    
    render() {
        return (
            <Card >
            <CardTitle title="Methodology title" subtitle="User Name - User email" />
            <Divider />
            <CardTitle title="Paso 3: Planificación" />  
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
                              members={[{name: "carlos", role: "jefe de grupo"}, {name: "rodolfo", role: "junior"}]}
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





                <CardActions>
                  <FlatButton label="Action 1" />
                  <FlatButton label="Action 2" />
                </CardActions>
            }
            }
            </Card>
        )
    }
}


export default StepsContainer;
