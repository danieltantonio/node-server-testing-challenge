const express = require('express');
const server = express();

const users = [
    {
        id: 1,
        name: 'Daniel'
    }
];

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

server.delete('/:id', (req,res) => {
    const index = users.findIndex(usr => usr.id === parseInt(req.params.id));

    if(index < 0) {
        return res.status(400).json({ message: 'Unable to find user with specified ID.' });
    }

    users.splice(index, 1);

    res.status(202).json(users);
});

module.exports = server;