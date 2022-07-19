const { Router } = require('express');

const router = Router();

const db = require('./controller')

//routes
router.get('/companies', db.getCompany)

module.exports = router