import { Usuario } from "./usuario";

export class Incidencia {
  id!: number;
  titulo!: string;
  descripcion!: string;
  estado!: 'ABIERTA' | 'EN_CURSO' | 'RESUELTA';
  prioridad!: 'ALTA' | 'BAJA' | 'MEDIA';
  fechaCreacion!: Date;
  cliente!: Usuario;
  tecnico!: Usuario;
}