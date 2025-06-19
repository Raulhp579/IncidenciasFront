import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comentario } from '../models/comentario';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  constructor(private http:HttpClient) {}

  private getHeaders():HttpHeaders{
    return new HttpHeaders({
      'Content-Type':'application/json'
    });
  }

  getComentariosId(idInc:number):Observable<any>{
    return this.http.get("http://localhost:8080/comments/getComments"+idInc, {headers:this.getHeaders()})
  }

  addComentario(comentario:Comentario):Observable<any>{
    return this.http.post("http://localhost:8080/comments/addComment", comentario)
  }
}
