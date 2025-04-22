import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SimulationService {
  private apiUrl = 'http://localhost:8080/api/simulation'; // Ensure this is the correct base URL

  constructor(private http: HttpClient) {}

  startSimulation(config: any): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/start`, config);
  }

  stopSimulation(): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/stop`, {});
  }

  getSimulationStats(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/stats`);
  }
}
