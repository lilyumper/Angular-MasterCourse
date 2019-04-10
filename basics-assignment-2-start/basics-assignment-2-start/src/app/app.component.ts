import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName="";
  newUser="A Username has not been added. Please add one!";

  addUsername(){
    this.newUser = "Welcome " + this.userName;
    this.userName = "";

  }
  isUsernameEmpty(){
    if(this.userName === "" || this.userName.length <=0 ) {
      return true;
    }
  }
}
