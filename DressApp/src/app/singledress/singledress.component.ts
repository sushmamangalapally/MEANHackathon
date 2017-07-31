import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import { GetdressService,  } from '../getdress.service';
import { Dress } from '../Dress';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'app-singledress',
  templateUrl: './singledress.component.html',
  styleUrls: ['./singledress.component.css']
})
export class SingledressComponent implements OnInit {
  

  dressid;
  products = [];
  thedress;
  name= "";
  description = '';
  price = 0;
  image = '';
  singledress;
  errorslogin;
  renton=""
  rentto=""
  dress= new Dress();
  currentDate: Date;
   constructor(private _http: Http, private _dress: GetdressService, private router: Router, private _route: ActivatedRoute){ 
     this._route.params.subscribe((param)=>{
      console.log(param.id);
      this.dressid = param.id
    }) 
    }

    ngOnInit(){
      this.getSingleDress(this.dressid)
    }

    getSingleDress(thedressid){
      console.log(thedressid)
      this._dress.getSingleDress(thedressid)
      .then(
        singledress => {
          console.log(singledress)
          this.singledress =singledress
          this.name = singledress.name
          this.price = singledress.price
          this.description = singledress.description
          this.image = singledress.image
          this.renton = singledress.renton.slice(0,10)
      console.log("this.renton", this.renton);
      this.rentto = singledress.rentto.slice(0,10)
      console.log("this.rentto", this.rentto);
        }
      )
      .catch((err)=>{
        console.log(err, "there was an error catch triggered");
      })

    
    }
    rentadress(){
      console.log("in singledress.comp.ts logging in dress")
      console.log("the dress: ", this.dress)
      this._dress.findingtheDress(this.dress, this.dressid)
    .then(
      dress => {
      console.log(dress, "this is in then callback getNoted");
      this.dress = dress
      this.router.navigate(['delivery']);
      })
    .catch((err)=> {
    
      if(err.status == "401"){
        this.errorslogin = "You need to register!"
      }
      else if(err.status == "402"){
        this.errorslogin = "Wrong password!"
      }
    }
    )
  }
    }

  /*dresses: Dress[] = [];
  dress: Dress = new Dress();

 
    tasks = [];
  name= "";
  description = '';
  price = 0;
  image = '';
  userexists = true;
  result = 0;
  ngOnInit(){
    this._dress.find();
  }

   constructor(private _dress: GetdressService){  }

    this._getdressService.find()
      .then((data)=> {
        console.log("find: this is callback in component dashboard", data);
        this.players = data.players;
      })
      .catch((err)=> {
        console.log("error retrieving messages", err);
      })*/



