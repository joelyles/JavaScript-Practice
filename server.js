// practice server using mostly Dave Gray node tutorial and original documentation (express, mdm, etc.)

const express = require('express');
const server = express();
const router = express.Router();
const port = 3500;
const fsPromises = require('fs').promises;
const path = require('path');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const { logger } = require('./middleware/logEvents');
const errorHandler = require('./middleware/logErr');

server.use(logger);

server.use(cors(corsOptions));

// middleware conventions
server.use(express.urlencoded({ extended: false }));
server.use(express.json());
server.use(express.static(path.join(__dirname, '/public')));

server.use(require('./routes/root'));

server.use(errorHandler);

server.listen(port, () => console.log(`practice server running on port ${port}`));