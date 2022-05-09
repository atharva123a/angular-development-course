import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  displayDetails = false;
  items = [];

  toggleDisplayDetails () {
    this.displayDetails = !this.displayDetails;
    this.items.push(new Date());
  }

}
