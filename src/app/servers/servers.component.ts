import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = '';
  serverCreated = false;
  servers: String[] = ['Server 1', 'Server 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  // onUpdateServerName(e: Event) {
  //   this.serverName = (<HTMLInputElement>e.target).value;
  // }
  onUpdateServerName(e: { target: HTMLInputElement }) {
    this.serverName = e.target.value;
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus =
      'Server created finally! Server Name is ' + this.serverName;
  }
}
