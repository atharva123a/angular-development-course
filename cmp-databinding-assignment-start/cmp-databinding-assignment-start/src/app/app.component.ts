import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  gameCount: number = 0;
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onIncrement({ num: number }) {
    this.gameCount = number;
    if (number % 2 == 0) {
      this.evenNumbers.push(this.gameCount);
    }
    else {
      this.oddNumbers.push(this.gameCount);
    }
  }

  onReset() {
    this.gameCount = 0;
  }
}
