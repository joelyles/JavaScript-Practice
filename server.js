// practice server using mostly Dave Gray node tutorial and original documentation (express, mdm, etc.)

const express = require('express');
const app = express();
const router = express.Router();
const port = 3500;
const fsPromises = require('fs').promises;
const path = require('path');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const { logger } = require('./middleware/logEvents');
const errorHandler = require('./middleware/logErr');

app.use(logger);

app.use(cors(corsOptions));

// middleware conventions
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '/public')));

app.use(require('./routes/root'));
app.use('/register', require('./routes/register'));
app.use('/auth', require('./routes/auth'));
app.use('/employees', require('./routes/api/employees'));

app.use(errorHandler);

app.listen(port, () => console.log(`practice server running on port ${port}`));