import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiEndPoints } from '../constants/api.enum';
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  public apiUrl;
  constructor(private readonly _http: HttpClient, ) { }

  public getAllUsers(param) {
    return this._http.get(environment.apiUrl + param);
  }
}
