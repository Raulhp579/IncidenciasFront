import { Component, OnInit } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import { IncidenciaService } from '../../servicios/incidencia-service';
import { ChangeDetectorRef } from '@angular/core';
import { DatePipe } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { UsuarioService } from '../../servicios/usuario-service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-incidencia-detalle',
  imports: [MatListModule,DatePipe,MatButtonModule,MatIconModule,RouterModule],
  templateUrl: './incidencia-detalle.html',
  styleUrl: './incidencia-detalle.scss'
})
export class IncidenciaDetalle implements OnInit{
  idIncidencia:number=0;
  incidencia?:any 
  cliente?:any 
  tecnico?:any

  constructor(private incidenciaService: IncidenciaService, private cdr: ChangeDetectorRef , private usuarioService:UsuarioService){};

   async ngOnInit():Promise<void> {
      this.idIncidencia = this.incidenciaService.getIncidenciaSeleccionada();
      try{//firstValue para transformar el obserbable
        this.incidencia = await firstValueFrom(
          this.incidenciaService.obtenerPorId(this.idIncidencia)
        );
        this.cliente = await firstValueFrom(
          this.usuarioService.getUsuarioPorId(
            this.incidencia.clienteId
          )
        ); //falta comprobar si tiene tecnico asociado sino da error
        if(this.incidencia.tecnicoId!==null){
        this.tecnico = await firstValueFrom(
          this.usuarioService.getUsuarioPorId(
            this.incidencia.tecnicoId
          )
        )
      }

        this.cdr.detectChanges()
      }catch(error){
        console.error("error al obtener la incidencia ",error)
      }   
  }


}

