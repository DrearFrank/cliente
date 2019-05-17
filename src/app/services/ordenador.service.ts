import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Ordenadores} from '../models/ordenador';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class OrdenadorService {

  API_URI = 'http://localhost:3000';

  constructor( private http: HttpClient) {}
    getOrdenadores(){
      return this.http.get(`${this.API_URI}/ordenadores`);
      } 
    getOrdenador(id_pc: string) {
        return this.http.get(`${this.API_URI}/ordenadores/${id_pc}`);
      }
    
    deleteOrdenador(id_pc: string) {
        return this.http.delete(`${this.API_URI}/ordenadores/${id_pc}`);
      }
    
    saveOrdenador(ordenadores: Ordenadores) {
        return this.http.post(`${this.API_URI}/ordenadores`, ordenadores);
      }
    
    updateOrdenador(id_pc: string|number, updatedOrdenadores: Ordenadores): Observable<Ordenadores> {
        return this.http.put(`${this.API_URI}/Ordenadores/${id_pc}`, updatedOrdenadores);
      }
}
