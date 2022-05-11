import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  num : number = 0;
  ref : NodeJS.Timeout;
  // ref = setInterval(() => {},1000);
  @Output() increment = new EventEmitter<{num : number}>();
  @Output() reset = new EventEmitter<{num : number}>();
  constructor() { }

  ngOnInit(): void {
  }

  incrementNumber(){
    this.ref = setInterval(() => {
      this.num += 1;
      this.increment.emit({num : this.num});
    }, 1000)
  }

  stopIncrement(){
    this.num = 0;
    clearInterval(this.ref);
    this.reset.emit({num : 0});
  }  

}
