import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  WebSocketGateway,
} from '@nestjs/websockets';
import * as net from 'net';

@WebSocketGateway()
export class BiometricGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  private server: net.Server;

  afterInit() {
    this.server = net.createServer((socket) => {
      this.handleConnection(socket);
    });

    this.server.listen(3001, () => {
      console.log('Hello');
    });
  }

  handleConnection(socket: net.Socket) {
    socket.on('data', (data) => {
      console.log(data);
    });

    socket.on('close', () => {
      console.log('close');
    });

    socket.on('error', () => {
      console.log('error');
    });
  }

  handleDisconnect() {
    console.log('disconnect');
  }

  // @SubscribeMessage('message')
  // handleMessage(client: any, payload: any): string {
  //   return 'Hello world!';
  // }
}
