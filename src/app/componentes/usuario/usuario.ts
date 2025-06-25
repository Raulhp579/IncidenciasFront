import { Component, OnInit } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { UsuarioService } from '../../servicios/usuario-service';
import { firstValueFrom } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-usuario',
  imports: [
    MatMenuModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatTableModule,
    MatIconModule,
    RouterModule
  ],
  templateUrl: './usuario.html',
  styleUrl: './usuario.scss',
  standalone: true
})
export class Usuario implements OnInit{
  displayedColumns: string[] = ['id', 'nombre', 'email', 'contraseña','rol'];
  dataSource = new MatTableDataSource<Usuario>();
  filtro:string=""
  constructor(private usuarioService:UsuarioService){}

   async ngOnInit():Promise<void>{
    this.dataSource.data = await firstValueFrom(
      this.usuarioService.getUsuarios()
    )
  }

  async buscarPorNombre(){
    const resultado = await firstValueFrom(
      this.usuarioService.getPorNombre(this.filtro)
    )
    this.dataSource.data = Array.isArray(resultado) ? resultado: [resultado];
  }

}
