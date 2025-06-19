import { Incidencia } from './incidencia';
import { Usuario } from './usuario';

export class Comentario {
  constructor(
    public id: number,
    public tipo:
      | 'BUGS_SERVIDOR_CORREO'
      | 'BUGS_SERVIDOR_INCIDENCIAS'
      | 'BUGS_SERVICIO_CONTABILIDAD'
      | 'BUGS_SERVICIO_BACKUP'
      | 'ERROR_RED_LOCAL',
    public mensaje: string,
    public fecha: Date,
    public autor: Usuario,
    public incidencia: Incidencia
  ) {}
}
