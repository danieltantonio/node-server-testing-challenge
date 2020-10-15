const express = require('express');
const server = express();
const PORT = process.env.PORT || 5000;

server.get('/', (req,res) => {
    res.status(200).json({ message: 'Hello! :)' });
});

module.exports = server;