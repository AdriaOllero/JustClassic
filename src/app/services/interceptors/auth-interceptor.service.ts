import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
=======
import {HttpInterceptor, HttpRequest, HttpHandler, HttpEvent,} from '@angular/common/http';
>>>>>>> 7891c0746be7c6182ede4056bafa25f47aabc475
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    let request = req;
    if (token) {
      request = req.clone({
        setHeaders: {
          authorization: `Bearer ${token}`
        }
      });
    }
    console.log(request.url)
    return next.handle(request);
  }
}
