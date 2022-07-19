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
router.post('/products', db.createProduct)
router.get('/sales', db.getSales)
router.get('/sales/:id', db.getSalesById)
router.post('/sales', db.createSale)

module.exports = router