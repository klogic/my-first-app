import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  // styleUrl: './server.component.css',
  styles: [
    `
      .online {
        background-color: green;
      }
    `,
  ],
})
export class ServerComponent {
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  data = '';
  serverId = 10;
  serverStatusList = {
    0: 'offline',
    1: 'online',
  };
  serverName = 'test';
  serverCreated = false;
  serverCreationStatus = 'no server created';
  serverStatus = 'online';
  allowNewServer = false;
  servers = ['testServer', 'testServer2'];

  getServerStatus() {
    return this.serverStatusList[this.serverId % 2 == 0 ? 0 : 1];
  }

  onCreateServer() {
    this.serverCreationStatus = 'the server has been created';
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  getColor() {
    return this.serverStatus === 'online' ? 'white' : 'black';
  }
}
