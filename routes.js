const { Router } = require('express');

const router = Router();

const db = require('./controller')

//routes
router.get('/companies', db.getCompany)
router.get('/companies/:id', db.getCompanyById)
router.get('/customers', db.getCustomer)
router.get('/customers/:id', db.getCustomerById)
router.put('/customers/:id', db.updateCustomer)
router.get('/products', db.getProduct)
router.get('/products/:id', db.getProductById)

module.exports = router