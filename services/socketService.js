exports.handleSocketConnection = (socket) => {
    console.log('A user connected');
  
    socket.on('message', (data) => {
      console.log('Message received: ', data);
      socket.broadcast.emit('message', data);
    });
  
    socket.on('disconnect', () => {
      console.log('A user disconnected');
    });
};
  