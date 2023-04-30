import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BotonesService {
  
  constructor(private http:HttpClient) { }

  obtenerDatos2Json():Observable<any>{
    return this.http.get('./assets/Json/botones.json')
  }
}
