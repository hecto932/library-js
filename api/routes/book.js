const debug = require('debug')('library-api:book-router');
const express = require('express');
const db = require('../lib/db');
const { config } = require('../config');
const objResponse = require('../utils/objResponse')

const router = express.Router();

let services;
let Book;

router.use(async function (req, res, next) {
  if (!services) {
    try {
      debug('Connecting...')
      services, { Book }  = await db(config.psql);
    } catch (err) {
      next(err)
    }
  }

  next();
})

router.get('/books', async function (req, res, next) {
  const { query } = req;

  try {
    const books = await Book.findAll(query);
    objResponse(res, 200, { data: books });
  } catch (err) {
    next(err)
  }
});

router.post('/books', async function (req, res, next) {
  const { body: book } = req;

  try {
    const newBook = await Book.create(book);
    objResponse(res, 200, { data: newBook });
  } catch (err) {
    next(err);
  }
})

module.exports = router;