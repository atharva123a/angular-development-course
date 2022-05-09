import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector : '.app-servers',
  selector : 'app-servers',
  templateUrl : './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowAddServer = false;
  serverCreationStatus = 'Server not created!'
  serverName = 'Test';
  constructor() { 
    setTimeout(() => {
      this.allowAddServer = true;
    }, 2000)
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created successfully! The name of the new server is ' + this.serverName;
  }

  onUpdateServer (event : Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
