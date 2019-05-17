import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categoriactv } from '../models/categoriactv';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriactvService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getCategactvs() {
    return this.http.get(`${this.API_URI}/cateactivos`);
  }

  getCategactv(id: string) {
    return this.http.get(`${this.API_URI}/cateactivos/${id}`);
  }

  deleteCategactv(id: string) {
    return this.http.delete(`${this.API_URI}/cateactivos/${id}`);
  }

  saveCategactv(catactivo: Categoriactv) {
    return this.http.post(`${this.API_URI}/cateactivos`, catactivo);
  }

  updateCategactv(id: string|number, updatedCategactv: Categoriactv): Observable<Categoriactv> {
    return this.http.put(`${this.API_URI}/cateactivos/${id}`, updatedCategactv);
  }

}
