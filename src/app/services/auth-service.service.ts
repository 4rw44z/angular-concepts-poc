import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  login(data):Observable<any> {
    // return this.http.post<User>('/api/login', {email, password})
    //     // this is just the HTTP call, 
    //     // we still need to handle the reception of the token
    //     .shareReplay();
    return this.http.post(`${environment.apiUrl}login`, data);
}
}
