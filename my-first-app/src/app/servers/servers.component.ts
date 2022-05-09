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
  serverCreated = false;
  servers = ["TestServer 1", "TestServer 2"];

  constructor() { }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created successfully! The name of the new server is ' + this.serverName;
  }

  onUpdateServer (event : Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  isServerNameEmpty() {
    return this.serverName.length == 0;
  }

}
