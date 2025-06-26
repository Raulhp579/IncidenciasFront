import { Component, signal } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { Usuario } from '../usuario/usuario';
import { UsuarioService } from '../../servicios/usuario-service';

@Component({
  selector: 'app-formulario-usuario',
  imports: [
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  templateUrl: './formulario-usuario.html',
  styleUrl: './formulario-usuario.scss',
})
export class FormularioUsuario {
  constructor(private usuarioService: UsuarioService) {}

  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  loginForm = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    contrasenya: new FormControl('', Validators.required),
    rol: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    const usuario = {
      nombre: this.loginForm.value.nombre,
      email: this.loginForm.value.email,
      contrasenya: this.loginForm.value.contrasenya,
      rol: this.loginForm.value.rol,
    };
    console.log('Usuario que se envía:', usuario);
    this.usuarioService.addUsuario(usuario).subscribe((response) => {
      console.log('Usuario creado', response);
    });
  }
}
