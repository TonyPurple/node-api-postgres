const getCompany = 'SELECT * FROM company ORDER BY company_id ASC'
const getCompanyById = 'SELECT * FROM company WHERE company_id = $1'

const getCustomer = 'SELECT * FROM customer ORDER BY customer_id ASC'
const getCustomerById = 'SELECT * FROM customer WHERE customer_id = $1'

module.exports = {
    getCompany,
    getCompanyById,
    getCustomer,
    getCustomerById

}