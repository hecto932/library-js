const debug = require('debug')('library-api:*');
const express = require('express');


const app = express();

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  debug(`Server listening on port http://localhost:${server.address().port}`);
})