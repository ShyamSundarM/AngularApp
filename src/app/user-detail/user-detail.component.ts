import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from "../../Models/user.model";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {
  // @ts-ignore
  @Input("User") user: User;
  @Output() ClickEvent = new EventEmitter<string>();

  onClick(userName:string){
    this.ClickEvent.emit(userName);
  }

}
