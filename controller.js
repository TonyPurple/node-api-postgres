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

// get a single company by ID
const getCompanyById = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query(queries.getCompanyById, [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

//get all customers
const getCustomer = (request, response) => {
    pool.query(queries.getCustomer, (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

module.exports = {
    getCompany,
    getCompanyById,
    getCustomer
}