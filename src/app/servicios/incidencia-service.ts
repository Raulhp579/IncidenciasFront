import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Incidencia } from '../models/incidencia';

@Injectable({
  providedIn: 'root'
})
export class IncidenciaService {

  constructor(private http:HttpClient) { }

  id:number=0;

  incidenciaSelecciona(id:number){
    this.id=id;
  }

  getIncidenciaSeleccionada(){
    return this.id;
  }

  private getHeaders():HttpHeaders{
    return new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }

  getIncidencias():Observable<any>{
    return this.http.get("http://localhost:8080/incidence/showAll", {headers:this.getHeaders()}) 
  };

  crearIncidencia(incidencia:any):Observable<any>{
    return this.http.post("http://localhost:8080/incidence/addIncidence", incidencia , {
      headers:this.getHeaders(),
    })
  };

  cambiarEstado(idInc:number, estado:string):Observable<any>{
    return this.http.put("http://localhost:8080/incidence/changeStatus/"+idInc+"/"+estado.toUpperCase(), null, {
      headers:this.getHeaders(),
    });
  };

  asignarTecnico(idInc:number,idUsuario:number):Observable<any>{
    return this.http.put("http://localhost:8080/incidence/addTechnical/"+idInc+"/"+idUsuario, null);
  };

  obtenerPorId(IdInc:number):Observable<any>{
    return this.http.get("http://localhost:8080/incidence/getIncidence/"+IdInc, {headers:this.getHeaders()})
  };

  obtenerPorCliente(idUser:number):Observable<any>{
    return this.http.get("http://localhost:8080/incidence/getByClient/"+idUser, {headers:this.getHeaders()})
  }; 

  obtenerPorTecnico(idTec:number):Observable<any>{
    return this.http.get("http://localhost:8080/incidence/getByTechnical/"+idTec, {headers: this.getHeaders()})
  };

  obtenerIncidenciaPorNombreCliente(nombre:string):Observable<any>{
    return this.http.get("http://localhost:8080/incidence/findByNombre/"+nombre, {headers:this.getHeaders()})
  }
}
