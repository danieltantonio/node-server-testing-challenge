const express = require('express');
const server = express();

const users = [];

server.use(express.json());

server.get('/', (req,res) => {
    res.status(200).json({ message: 'Hello! :)' });
});

server.post('/', (req,res) => {    
    if(!req.body || !req.body.name) {
        return res.status(400).json({ message: 'Missing required fields.' });
    }

    const user = {
        id: users.length + 1,
        name: req.body.name
    }

    users.push(user);
    res.status(201).json(users);
});

module.exports = server;