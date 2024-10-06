const express = require('express');
const cors = require('cors');
const corsOption = ('./middleware/corsOptions')
const EventEmitter = require('events');
const { logger } = require('./middleware/logEvents');

const app = express();
const PORT = 3000;


const eventEmitter = new EventEmitter();

app.use(logger);
app.use(cors());
app.use(express.json());

app.use('/', require('./routes/route'));
// app.use('/register', require('./routes/register'));
