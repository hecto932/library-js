module.exports = function (response, status, parameters) {
  const result = {
    error: false,
    pageNumber: parameters.pageNumber ? parameters.pageNumber : null,
    numberEntries: parameters.numberEntries ? parameters.numberEntries : null,
    result: parameters.data
  }
  response.status(status).json(result);
}
