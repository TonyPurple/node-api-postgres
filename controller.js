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
  
//get a single customer by ID
const getCustomerById = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query(queries.getCustomerById, [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

//update data in existing customer
const updateCustomer = (request, response) => {
    const id = parseInt(request.params.id)
    const { name } = request.body
  
    pool.query(
      queries.updateCustomer, [name, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`Customer modified with ID: ${id}`)
      }
    )
  }

  //get all products
const getProduct = (request, response) => {
    pool.query(queries.getProduct, (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
 
//get a single product by id
const getProductById = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query(queries.getProductById, [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

module.exports = {
    getCompany,
    getCompanyById,
    getCustomer,
    getCustomerById,
    updateCustomer,
    getProduct,
    getProductById
}