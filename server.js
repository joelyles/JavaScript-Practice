// practice server using mostly Dave Gray node tutorial notes/code and original documentation (express, mdm, etc.)

const express = require('express');
const server = express();
const router = express.Router();
const port = 3500;
const fsPromises = require('fs').promises;
const path = require('path');
const { logger } = require('./middleware/logEvents');
const errorHandler = require('./middleware/logErr');

server.use(logger);

server.use(express.urlencoded({ extended: false }));
server.use(express.json());

server.use(express.static(path.join(__dirname, '/public')));

server.get('^/$|/index(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

server.get('/about(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'about.html'))
});

server.use(errorHandler);

server.listen(port, () => console.log(`practice server running on port ${port}`));