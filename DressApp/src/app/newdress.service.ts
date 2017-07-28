import { Injectable } from '@angular/core';
import { Dress } from './Dress';
import { Http } from "@angular/http";
import "rxjs/Rx";

@Injectable()
export class NewdressService {

  constructor(public _http: Http) { }

  // adding new dress
  createadress(dress: Dress){
    console.log(dress, "adddress service");
    return this._http.post("/create", dress).map(data=> data.json()).toPromise();
  }

}
