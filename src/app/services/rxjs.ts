import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
@Injectable({ providedIn: 'root' })

export class RxjsService {
    constructor(private _http : HttpClient) {}
    public stackAreaConfigId = new BehaviorSubject(null);
    setStackAreaConfigId(data: any) {
        this.stackAreaConfigId.next(data);
    }
    getStackAreaConfigId(): Observable<any> {
        return this.stackAreaConfigId.asObservable();
    } 
   
}