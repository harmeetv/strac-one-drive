const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const dotenv = require('dotenv');
const subscriptionRoutes = require('./routes/subscriptionRoutes');
const webhookRoutes = require('./routes/webhookRoutes');
const { handleSocketConnection } = require('./services/socketService');

// Load environment variables from .env file
dotenv.config();

// Initialize Express app
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Create an HTTP server
const server = http.createServer(app);

// Initialize Socket.io with the HTTP server and custom path
const io = socketIo(server, {
  path: process.env.SOCKET_PATH
});

// Handle WebSocket connections
io.on('connection', handleSocketConnection);

// Use routes
app.use('/subscriptions', subscriptionRoutes);
app.use('/webhooks', webhookRoutes(io));

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
