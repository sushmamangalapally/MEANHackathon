import { Component, OnInit } from '@angular/core';
import { Dress } from '../Dress';
import { NewdressService } from '../newdress.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-newdress',
  templateUrl: './newdress.component.html',
  styleUrls: ['./newdress.component.css']
})
export class NewdressComponent implements OnInit {

  /*constructor() { }

  ngOnInit() {
  }*/

  dress: Dress = new Dress();

  constructor(public _dress: NewdressService, public _router: Router) { }

  ngOnInit() {
  }

  create(){
    console.log("From newdress.component.ts: Add Dress triggered");
    console.log(this.dress, "create() method adddress component");
    this._dress.createadress(this.dress)
      .then((data)=>{
        console.log(data, "createadress() method new dress component");
       this._router.navigate([`dashboard`]);
      })
      .catch((err)=>{
        console.log(err, "there was an error catch triggered");
      })
  }

}
