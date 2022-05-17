import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  @Output() setFeature = new EventEmitter<string>();

  ngOnInit(): void {
  }
  toggleFeature(feature: string){
    this.setFeature.emit(feature);
  }
}
