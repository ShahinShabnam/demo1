import { Injectable,OnInit } from '@angular/core';
import {CustomKeyboardComponent } from 'custom-keyboard.component';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';


@Injectable()

export class CustomKeyboardService {
  subject: Subject<any>;

  response: any;
  type: any;
  constructor(private _http: Http) {
  }
     
      //  setInputReference(): Observable<any> {
      //    return this._http.get(this.type)
      //    .map(response => response.json());
      
      //  }
   
       filterOn(id: string): Observable<any> {
        return (this.subject.filter(d => (d.id === id)));
    };
    
    emit(id: string, options?: any) {
      this.subject.next({ id: id, data: options });
    }


}
