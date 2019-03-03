const debug = require('debug')('app:handlerErrors');
const { config } = require('../../config');

function withErrorStack (err, stack) {
  if (config.dev) {
    return { ...err, stack }
  }
}

function logErrors(err, req, res, next) {
  console.log(err.stack);
  next(err);
}

module.exports = {
  logErrors
}