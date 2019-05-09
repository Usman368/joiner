import {  HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class DataService {
  constructor(private http: HttpClient ) { }
  // storeData(record: any[] ) {
  //   return this.http.post('https://assignments-app-3b622.firebaseio.com/' , record);
  // }


  getData() {
    return this.http.get('https://assignments-app-3b622.firebaseio.com/')
    .subscribe(data => {
      console.log('we get' , data);
    });
  }
}

