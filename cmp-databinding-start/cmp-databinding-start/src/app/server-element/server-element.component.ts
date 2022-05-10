import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {

  @Input('svrComponent') element: { type: string, name: string, content: string };
  @Input() name : string;
  constructor() { }

  ngOnInit(): void {
  }

}
