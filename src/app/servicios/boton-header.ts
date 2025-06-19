import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BotonHeader {

  constructor() { }

  private pulsado = new BehaviorSubject<boolean>(false);
  pulsado$ = this.pulsado.asObservable();


}
