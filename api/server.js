const debug = require('debug')('library-api:server');
const express = require('express');
const bodyParser = require('body-parser');

const booksApi = require('./routes/book');

const { logErrors } = require('./utils/middlewares/errorHandlers');

const app = express();

const port = process.env.PORT || 3000;

// 3rdParty middlewares
app.use(bodyParser.json());


// routes
app.use('/api', booksApi);

// errorHandlers
app.use(logErrors);

const server = app.listen(port, () => {
  debug(`Server listening on port http://localhost:${server.address().port}`);
})