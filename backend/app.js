const express = require('express');
const http = require('http');
const cors = require('cors');
const socketIo = require('socket.io');
const db = require('./config/db');
const app = express();
const server = http.createServer(app);
const io = socketIo(server);
const commentRoutes = require('./routes/comments')(io);
const authRoutes=require('./routes/authRoutes');
// Middleware
app.use(cors());
app.use(express.json());
// Routes
app.use('/api', commentRoutes);
app.use('/api/auth',authRoutes);
// Socket.IO setup

io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

// Export the server for use in server.js
module.exports = { app, server };
