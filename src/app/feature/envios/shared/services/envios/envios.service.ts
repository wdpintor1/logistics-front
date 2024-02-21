import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EnvioService {
  private apiUrl: string = 'http://localhost:8080/envios/buscar/';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    //const token = localStorage.getItem('token');
    //const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const apiUrl = `${this.apiUrl}`;
    return this.http.get(apiUrl, {}).pipe(
      map((response: any) => response || {}),
      catchError((error) => {
        console.error(`Error Obteniendo envios:`, error);
        throw error;
      })
    );;
  }

  deleteUserForIndex(userId: number): Observable<any> {
    // Obtener el token del local storage
    const token = localStorage.getItem('token');
    // Configurar los encabezados con el token
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });

    const deleteUrl = `${this.apiUrl}/${userId}`;
    return this.http.delete(deleteUrl, { headers }).pipe(
      map((response: any) => response || {}),
      catchError((error) => {
        console.error(`Error deleting user with ID ${userId}:`, error);
        throw error;
      })
    );
  }
}
