import { Login } from './../models/login.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Car } from '../models/car.model';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) { }

  loginUser(login: Login): Observable<any> {
    return this.httpClient.post(`${environment.apiUrl}/login`, login).pipe(
      catchError((error) => {
        return error;
      })
    );
  }
  registerUser(user: User): Observable<any> {
    return this.httpClient.post(`${environment.apiUrl}/registerUser`, user).pipe(
      catchError((error) => {
        return error;
      })
    );
  }

  getUser(filter: string): Observable<any> {
    const params = { filter: filter };
    return this.httpClient
      .get(`${environment.apiUrl}/user`, { params: params })
      .pipe(
        catchError((error) => {
          return error;
        })
      );
  }
  saveUser(user: User): Observable<any> {
    return this.httpClient.post(`${environment.apiUrl}/login`, user).pipe(
      catchError((error) => {
        return error;
      })
    );
  }
  saveCar(car: Car): Observable<any> {
    return this.httpClient.post(`${environment.apiUrl}/login`, car).pipe(
      catchError((error) => {
        return error;
      })
    );
  }
}
