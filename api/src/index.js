const express = require('express');
const server = express();
const cors = require('cors');


const port = process.env.port || '8080';

const noteRoute = require('./note.router');
server.use(cors());
server.use('/api', noteRoute);

server.listen(port);

console.log(`Express Server is running on port ${port}`);