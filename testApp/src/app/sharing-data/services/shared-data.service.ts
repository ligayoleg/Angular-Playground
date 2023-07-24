import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  public msgSub = new Subject<string>();

  constructor() { }


  public setData(message: string) {
   this.msgSub.next(message);
  }

  public getData(): Observable<string> {
   return this.msgSub.asObservable();
 }
}
