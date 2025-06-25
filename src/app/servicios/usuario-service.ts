import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) {}

  private getHeaders():HttpHeaders{
    return new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }

  getUsuarios():Observable<any>{
    return this.http.get("http://localhost:8080/user/getUsers" ,{headers:this.getHeaders()})
  }

  getUsuarioPorId(idUser:number):Observable<any>{
    return this.http.get("http://localhost:8080/user/getUser/"+idUser, {headers:this.getHeaders()})
  }

  addUsuario(usuario:Usuario):Observable<any>{
    return this.http.post("http://localhost:8080/user/addUser", usuario)
  }

  actualizarUsuario(idUsuario:number, cambio:string, valor:any):Observable<any>{
    return this.http.put("http://localhost:8080/user/updateUser/"+idUsuario+"/"+cambio+"/"+valor, null)
  }

  getPorNombre(nombre:string):Observable<any>{
    return this.http.get("http://localhost:8080/user/getByName/"+nombre, {headers:this.getHeaders()})
  }

  getPorRol(rol:string):Observable<any>{
    return this.http.get("http://localhost:8080/user/getUsersByRol/"+rol, {headers:this.getHeaders()})
  }
}
