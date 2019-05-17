import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Activo } from '../models/activos';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ActivosService {

  API_URI = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getActivos() {
    return this.http.get(`${this.API_URI}/Activos`);
  }

  getActivo(id: string) {
    return this.http.get(`${this.API_URI}/Activos/${id}`);
  }

  deleteActivo(id: string) {
    return this.http.delete(`${this.API_URI}/Activos/${id}`);
  }

  saveActivo(activo: Activo) {
    return this.http.post(`${this.API_URI}/activos`, activo);
  }

  updateActivo(id: string|number, updatedActivo: Activo): Observable<Activo> {
    return this.http.put(`${this.API_URI}/activos/${id}`, updatedActivo);
  }

}