import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Paciente } from './paciente';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {
  private apiUrl = environment.baseUrl;
  
  constructor(private http: HttpClient) { }
  
  getPacientes(): Observable<Paciente[]> {
    return this.http.get<Paciente[]>(this.apiUrl);
  }
}