import { Routes } from '@angular/router';
import { Incidencias } from './componentes/incidencias/incidencias';
import { Header } from './componentes/header/header';
import { FormularioIncidencia } from './componentes/formulario-incidencia/formulario-incidencia';
import { IncidenciaDetalle } from './componentes/incidencia-detalle/incidencia-detalle';

export const routes: Routes = [
    {path:'header' ,component:Header},
    {path:'incidencias' ,component:Incidencias},
    {path: '', redirectTo: 'incidencias', pathMatch: 'full'},
    {path:'addIncidencia', component:FormularioIncidencia},
    {path:'verIncidencia', component:IncidenciaDetalle}
];
