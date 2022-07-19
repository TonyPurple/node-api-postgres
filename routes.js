const { Router } = require('express');

const router = Router();

const db = require('./controller')

//routes
router.get('/companies', db.getCompany)
router.get('/companies/:id', db.getCompanyById)

module.exports = router