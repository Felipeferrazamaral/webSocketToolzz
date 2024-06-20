import WebsocketService from "App/Services/WebsocketService";

// Inicializa o serviço WebSocket
WebsocketService.start(() => {
  console.log("Socket.IO iniciado");
});
