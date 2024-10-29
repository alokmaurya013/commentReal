const express = require('express');
const http = require('http');
const cors = require('cors');
const socketIo = require('socket.io');
const db = require('./config/db');
const app = express();
const server = http.createServer(app);

// Initialize Socket.IO with the server
const io = socketIo(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

// Middleware
app.use(cors());
app.use(express.json());

// Import routes and pass the io instance to the comment routes
const commentRoutes = require('./routes/comments')(io);
const authRoutes = require('./routes/authRoutes');

// Routes
app.use('/api', commentRoutes);
app.use('/api/auth', authRoutes);

// Handle Socket.IO connection
io.on('connection', (socket) => {
  console.log('New client connected:', socket.id);

  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });
});

// Export both app and server for server.js
module.exports = { app, server };
