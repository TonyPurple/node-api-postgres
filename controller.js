const pool = require('./db');
const queries = require('./queries');

//get all companies
const getCompany = (request, response) => {
    pool.query(queries.getCompany, (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

module.exports = {getCompany}