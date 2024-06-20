import Env from "@ioc:Adonis/Core/Env";
import { Server as SocketServer } from "socket.io";

class WebSocketService {
  public isReady = false;
  public io: SocketServer;

  public start(callback: (socket: any) => void) {
    let port =
      Env.get("NODE_ENV") === "development" ? 4001 : Env.get("WEBSOCKET_PORT");

    this.io = new SocketServer(port, {
      cors: {
        origin: "*",
      },
    });

    this.io.on("connection", callback);
    this.isReady = true;
  }

  public emitToStream(conversationId: string, content: string) {
    if (this.isReady) {
      this.io.emit("streamText", {
        content: content,
        conversationId: conversationId,
      });
    } else {
      console.error("WebSocket not ready.");
    }
  }
}

export default new WebSocketService();
