const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const mongoose = require('mongoose');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Middleware to parse JSON requests
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/agile-planning-tool', { useNewUrlParser: true, useUnifiedTopology: true });

// Sample route
app.get('/', (req, res) => {
    res.send('Welcome to the Agile Planning Tool!');
});

// Socket.io for real-time communication
io.on('connection', (socket) => {
    console.log('New client connected');
    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

// Start the server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
