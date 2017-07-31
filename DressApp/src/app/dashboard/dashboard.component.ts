/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}*/

import { Component, OnInit } from '@angular/core';
import { GetdressService } from '../getdress.service';
import {User} from "../user"
import {RegistrationService} from '../registration.service';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import {SearchPipe} from '../search.pipe';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit { 
  tasks = [];
  alldresses = [];
  name= "";
  description = '';
  price = 0;
  image = '';
  userexists = true;
  result = 0;
  user: User;
  searchStr: string = '';
  gettingusername;
  // searchPipe = new SearchPipe();
  constructor(private _getdressService: GetdressService, public _register: RegistrationService, private router: Router, private _route: ActivatedRoute){
    this.user = _register.currentUser;
  }  
  ngOnInit(){
    
    //this.getTasks();
    this.getAllDresses();
    console.log("in listings of listings ", this.user)
    if(this.user){
      this._register.findingtheUser(this.user).then(
        (data) => {
          console.log(data, "in callback dashboard method")

          this.gettingusername = data.firstName;
        }
      )        
    }
    this.searchStr = " "
  }
  getTasks(){
    this.name = this.name;
    console.log("name:",this.name);
    this._getdressService.retrieveDresses()
    .then( tasks => { this.tasks = tasks; 
      console.log("in ddcomp", tasks.products);
    
      //this.result = tasks.public_repos + tasks.followers;      
      this.description = tasks.description; 
    })

    .catch( err => { console.log(err);}) 
        
  } 
  
  getAllDresses(){
    this.name = this.name;
    console.log("name:",this.name);
    this._getdressService.retrieveAllDresses()
    .then( alldresses => { 
      this.alldresses = alldresses; 
      console.log("in getAllDresses of  ddcomp", alldresses);
    
      //this.result = tasks.public_repos + tasks.followers;      
    })

    .catch( err => { console.log(err);}) 
        
  }
  }
   

