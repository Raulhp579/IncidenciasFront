import { Component, OnInit,} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./componentes/header/header";
import { BotonHeader } from './servicios/boton-header';
import { NgClass } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { Incidencias } from "./componentes/incidencias/incidencias";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, NgClass, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, RouterModule, MatListModule, Incidencias],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit{
  protected title = 'getorIncidencias-Front';
  constructor(public botonHeader: BotonHeader) {}

  abierto: boolean = true;
  
    ngOnInit(): void {
    this.botonHeader.pulsado$.subscribe(pulsado => {
      this.abierto = pulsado;
    });
  }
}
