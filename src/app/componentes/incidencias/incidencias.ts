import { Component, OnInit } from '@angular/core';
import { IncidenciaService } from '../../servicios/incidencia-service';
import { MatTableModule } from '@angular/material/table';
import { Incidencia } from '../../models/incidencia';
import { MatTableDataSource } from '@angular/material/table';
import { DatePipe } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { NgClass } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { IncidenciaDetalle } from '../incidencia-detalle/incidencia-detalle';
import { ChangeDetectorRef } from '@angular/core'; //para arreglar el error asincrono
import { SlicePipe } from '@angular/common';
import { Usuario } from '../usuario/usuario';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-incidencias',
  imports: [
    MatTableModule,
    DatePipe,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatSelectModule,
    RouterModule,
    NgClass,
    MatCardModule,
    IncidenciaDetalle,
    SlicePipe
  ],
  templateUrl: './incidencias.html',
  styleUrl: './incidencias.scss',
})
export class Incidencias implements OnInit {
  estadoNuevo: string = '';

  options = [
    { label: 'ABIERTA' },
    { label: 'EN_CURSO' },
    { label: 'RESUELTA' },
  ];

  //nombre columnas tabla
  displayedColumns: string[] = [
    'titulo',
    'prioridad',
    'descripcion',
    'estado',
    'fecha',
    'clienteId',
    'tecnicoId',
  ];
  dataSource = new MatTableDataSource<Incidencia>();

  filtro: number = 0;

  constructor(private incidenciaService: IncidenciaService, private cdRef: ChangeDetectorRef) {}

  async ngOnInit(): Promise<void> {
    this.dataSource.data = await firstValueFrom(
      this.incidenciaService.getIncidencias()
    );
  }

  filtrarIncidencias() {
    this.incidenciaService
      .obtenerPorIdUsuario(this.filtro)
      .subscribe(
        (response) => {
          this.dataSource.data = response;
        },
        (error) => {
          console.error(
            'error recibo de datos en filtrar',
            JSON.stringify(error, null, 2)
          );
          alert('Id no existente');
        }
      );
  }

  verTodasIncidencias() {
    this.incidenciaService.getIncidencias().subscribe(
      (response) => {
        this.dataSource.data = response;
      },
      (error) => {
        console.error('Error en el recibo de datos' + error);
      }
    );
  }

  cambiarEstado(id: number, estadoNuevo: string) {
    this.incidenciaService.cambiarEstado(id, estadoNuevo).subscribe(
      (data) => {
        console.log(
          'Incidencia con ID ' + id + ' cambiada a estado ' + estadoNuevo
        );
      },
      (error) => {
        console.error('error ' + error);
      }
    );
  }

  getPrioridadClass(prioridad: string): string {
    if (prioridad === 'ALTA') {
      return 'prioridad-alta';
    } else if (prioridad === 'MEDIA') {
      return 'prioridad-media';
    } else if (prioridad === 'BAJA') {
      return 'prioridad-baja';
    } else {
      return '';
    }
  }
  titulo: string = '';
  abierto: boolean = false;
  datosCargados = false;
  mostrarMenu(row: any) {
    const id = row.id;
    this.incidenciaService.incidenciaSelecciona(id);
    this.incidenciaService.obtenerPorId(id).subscribe((response) => { 
      this.titulo = response.titulo;
      this.datosCargados = true;
      this.abierto = true;

      this.cdRef.detectChanges();//arregla el error asincrono ya que fuerza a la vista reevaluar los nuevos valores
    });
  }

  cerrarMenu() {
    this.abierto = false;
    this.datosCargados = false;
    this.titulo = '';
  }
}
