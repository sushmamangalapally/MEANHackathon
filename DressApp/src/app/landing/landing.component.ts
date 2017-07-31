import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import {RegistrationService} from '../registration.service';
import {Router, ActivatedRoute} from "@angular/router"
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  user = new User();
  errorslogin = "";
  constructor(public _register: RegistrationService, public router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
  }

  login(){
    console.log("in landing.comp.ts logging in user")
    console.log("the note: ", this.user)
    this._register.findingtheUser(this.user)
    .then(
      user => {
      console.log(user, "this is in then callback getNoted");
      this.user = user
      this.router.navigate(['dashboard']);
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

  getLogin() {
    document.getElementById("panel").style.display = "block";
    document.getElementById("thatpanel").style.display = "none";
}
SignUp() {
    document.getElementById("thatpanel").style.display = "block";
    document.getElementById("panel").style.display = "none";
}


}
