import { Component, OnInit,} from '@angular/core';
import { Header } from "./componentes/header/header";
import { BotonHeader } from './servicios/boton-header';
import { NgClass } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ Header, NgClass, RouterModule],
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
