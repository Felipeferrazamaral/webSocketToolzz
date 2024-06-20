const Ws = use("Ws");

Ws.channel("/chat", "ChatController");
Ws.channel("/chat", (socket) => {
  socket.on("message", function* (payload) {
    // handle message
  });
});
