import { Component } from '@angular/core';
import {User} from "../Models/user.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = "Shyam's Angular App";
  users:User[] = [
    new User("Shyam Sundar Madabathula",24,"https://mdbootstrap.com/img/new/avatars/1.jpg","syam.s.madabathula"),
    new User("Sandhya Maradana",24,"https://mdbootstrap.com/img/new/avatars/2.jpg","m.sandhya"),
    new User("Ramani Madabathula",50,"https://mdbootstrap.com/img/new/avatars/3.jpg","m.ramani"),
  ];

  onClick(userName:string){
    console.log(userName);
  }
}
