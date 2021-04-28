import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ServerModule } from '../constants/serverModule.enum';
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  public apiUrl;
  constructor(private readonly _http: HttpClient, ) { }

  public get(module, subroutes) {
    // 2 enum files  
    // keep only get method add a module enum 
    // add post and put
    if(module === ServerModule.USERS) {
      return this._http.get(environment.apiUrl + subroutes);
    }
    
  }
  public post(module, subroute, requestBody) {
    if(module === ServerModule.USERS) {
        return this._http.post(environment.apiUrl + subroute, requestBody);
    }
  }
  public put(module, subroute, requestBody, id) {
    if(module === ServerModule.USERS) {
      return this._http.put(environment.apiUrl + subroute + `/${id}`, requestBody);
    }
  }
  public delete(module, subroute, id) {
    if(module === ServerModule.USERS) {
      return this._http.delete(environment.apiUrl + subroute + `/${id}`);
    }
  }
}
