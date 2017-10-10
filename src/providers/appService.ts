import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import { Http, Response,  } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {
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
      ngOnInit(): void {
        this.emit('inputType','password')
      }
    
      filterOn(id: string): Observable<any> {
        return (this.subject.filter(d => (d.id === id)));
    };
    
    emit(id: string, options?: any) {
      this.subject.next({ id: id, data: options });
    }
}