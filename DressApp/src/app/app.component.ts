import { Component } from '@angular/core';
import {User} from "./user"
import {RegistrationService} from './registration.service';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

    constructor(){
  }
}
