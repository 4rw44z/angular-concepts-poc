import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
@Injectable({ providedIn: 'root' })

export class RxjsService {
 
    public stackAreaConfigId = new BehaviorSubject(null);
  




    setStackAreaConfigId(data: any) {
        this.stackAreaConfigId.next(data);
    }
    getStackAreaConfigId(): Observable<any> {
        return this.stackAreaConfigId.asObservable();
    } 
}