import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import {RegistrationService} from '../../registration.service';
import {Router} from "@angular/router"
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  states: Array<string> = [];
  user = new User();
  moreusers = [];
  ngOnInit(){}
  constructor(public _register: RegistrationService, public _router: Router) {
    this.user = new User();
    this.states = ["Alaska",
                      "Alabama",
                      "Arkansas",
                      "Arizona",
                      "California",
                      "Colorado",
                      "Connecticut",
                      "District of Columbia",
                      "Delaware",
                      "Florida",
                      "Georgia",
                      "Hawaii",
                      "Iowa",
                      "Idaho",
                      "Illinois",
                      "Indiana",
                      "Kansas",
                      "Kentucky",
                      "Louisiana",
                      "Massachusetts",
                      "Maryland",
                      "Maine",
                      "Michigan",
                      "Minnesota",
                      "Missouri",
                      "Mississippi",
                      "Montana",
                      "North Carolina",
                      "North Dakota",
                      "Nebraska",
                      "New Hampshire",
                      "New Jersey",
                      "New Mexico",
                      "Nevada",
                      "New York",
                      "Ohio",
                      "Oklahoma",
                      "Oregon",
                      "Pennsylvania",
                      "Rhode Island",
                      "South Carolina",
                      "South Dakota",
                      "Tennessee",
                      "Texas",
                      "Utah",
                      "Virginia",
                      "Vermont",
                      "Washington",
                      "Wisconsin",
                      "West Virginia",
                      "Wyoming"]
  }
  onSubmit() {
    console.log("submit");
    console.log(this.user)
    this._register.registerUser(this.user)
    .then((data) => {
      (user) => {this.moreusers.push(user)}
      console.log(data, "callback from register request")
      this.user = data;
      this._router.navigate([`dashboard`])

    })
    .catch(
      (err) => {
        console.log(err, "status was an error catch trigger")
      }
    )
    // this.user = new User()

  };
}


