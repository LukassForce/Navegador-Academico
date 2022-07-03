import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http'
import { Observable, observable } from 'rxjs'
import { Justificacion } from '../../Interface/justificacion';

const httpOptions = {
  headers: new HttpHeaders ({ 'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  servidor="http://localhost:3001";

constructor(private servicio:HttpClient) { }

obtenerJustificacion():Observable<any>{

  return this.servicio.get(`${this.servidor}/justificacion`);
}

eliminarJustificacion(id:any):Observable<any>{

  return this.servicio.delete(`${this.servidor}/eliminarJustificacion/${id}`)
}

crearJustificacion(datos:Justificacion):Observable<any>{

  console.log(datos)
  return this.servicio.post(`${this.servidor}/crearJustificacion`, JSON.stringify(datos), httpOptions);
}

}
