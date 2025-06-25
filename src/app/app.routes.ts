import { Routes } from '@angular/router';
import { Incidencias } from './componentes/incidencias/incidencias';
import { Header } from './componentes/header/header';
import { FormularioIncidencia } from './componentes/formulario-incidencia/formulario-incidencia';
import { IncidenciaDetalle } from './componentes/incidencia-detalle/incidencia-detalle';
import { Usuario } from './componentes/usuario/usuario';
import { FormularioUsuario } from './componentes/formulario-usuario/formulario-usuario';

export const routes: Routes = [
    {path:'header' ,component:Header},
    {path:'incidencias' ,component:Incidencias},
    {path: '', redirectTo: 'incidencias', pathMatch: 'full'},
    {path:'addIncidencia', component:FormularioIncidencia},
    {path:'verIncidencia', component:IncidenciaDetalle},
    {path:'usuarios', component:Usuario},
    {path: 'addUser', component:FormularioUsuario}
];
