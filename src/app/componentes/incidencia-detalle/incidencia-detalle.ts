import { Component, OnInit } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import { IncidenciaService } from '../../servicios/incidencia-service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-incidencia-detalle',
  imports: [MatListModule],
  templateUrl: './incidencia-detalle.html',
  styleUrl: './incidencia-detalle.scss'
})
export class IncidenciaDetalle implements OnInit{
  idIncidencia:number=0;
  incidencia:any;
  mostrarIncidencia = false;
  constructor(private incidenciaService: IncidenciaService, private cdr: ChangeDetectorRef ){};

    ngOnInit(): void {
      this.idIncidencia = this.incidenciaService.getIncidenciaSeleccionada();
       this.incidenciaService.obtenerPorId(this.idIncidencia).subscribe((response)=>{
        this.incidencia = response;
        console.log(this.incidencia);
        this.mostrarIncidencia = true;
        this.cdr.detectChanges();
      },
      (error)=>{
        console.error("error al obtener los datos de la incidencia")
      }
    );
      
  }


}
