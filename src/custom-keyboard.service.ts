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
    
      customKeyboardComponentInput:any;
    //   constructor(public http: Http) {
    //     alert("hii");
        //this.customKeyboardComponentInput=this.customKeyboardComponent;
    //   }
      // setInputReference(inputType) { 
      //   this. customKeyboardComponentInput = inputType;
      //  }
      //  response: any;
      //  jsonURL:any;
     
      //  setInputReference(): Observable<any> {
      //    return this.http.get(this.jsonURL)
      //    .map(response => response.json());
      //  }
    //   ngOnInit(): void {
    //     this.emit('inputType','password')
    //   }
    
      filterOn(id: string): Observable<any> {
        return (this.subject.filter(d => (d.id === id)));
    };
    
    emit(id: string, options?: any) {
      this.subject.next({ id: id, data: options });
    }



}
