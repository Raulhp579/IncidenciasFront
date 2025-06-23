import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { IncidenciaService } from '../../servicios/incidencia-service';
import { UsuarioService } from '../../servicios/usuario-service';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-formulario-incidencia',
  imports: [
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    RouterModule,
  ],
  templateUrl: './formulario-incidencia.html',
  styleUrl: './formulario-incidencia.scss',
})
export class FormularioIncidencia {
  constructor(
    private incidenciaService: IncidenciaService,
    private usuarioService: UsuarioService
  ) {}

  loginForm = new FormGroup({
    titulo: new FormControl('', [Validators.required]),
    descripcion: new FormControl('', [
      Validators.maxLength(100),
      Validators.required,
    ]),
    estado: new FormControl('', [Validators.required]),
    prioridad: new FormControl('', [Validators.required]),
    cliente: new FormControl('', [Validators.required]),
    tecnico: new FormControl(),
  });

  onSubmit() {
    const clienteNombre: string = this.loginForm.value.cliente ?? '';
    const tecnicoNombre: string = this.loginForm.value.tecnico ?? '';

    this.usuarioService.getPorNombre(clienteNombre).subscribe((cliente) => {
      if (tecnicoNombre !== '') {
        this.usuarioService.getPorNombre(tecnicoNombre).subscribe((tecnico) => {
          const incidencia = {
            titulo: this.loginForm.value.titulo,
            descripcion: this.loginForm.value.descripcion,
            estado: this.loginForm.value.estado,
            prioridad: this.loginForm.value.prioridad,
            cliente: cliente,
            tecnico: tecnico,
          };

          this.incidenciaService
            .crearIncidencia(incidencia)
            .subscribe((response) => console.log('incidencia creada'));
            if(tecnico===null){
              alert("nombre del tecnico no encontrado")
            }else if(cliente===null){
              alert("nombre del cliente no encontrado")
            }else{
              alert("incidencia creado correctamente")
            }
        });
        
      } else {
        const incidencia = {
          titulo: this.loginForm.value.titulo,
          descripcion: this.loginForm.value.descripcion,
          estado: this.loginForm.value.estado,
          prioridad: this.loginForm.value.prioridad,
          cliente: cliente,
          tecnico: null,
        };
        this.incidenciaService.crearIncidencia(incidencia).subscribe(response=>console.log("incidencia creada"))
        if(cliente===null){
          alert("nombre de cliente no encontrado")
        }else{
          alert("incidencia creada correctamente")
        }
      }
    });
  }
}
