const getCompany = 'SELECT * FROM company ORDER BY company_id ASC'
const getCompanyById = 'SELECT * FROM company WHERE company_id = $1'

const getCustomer = 'SELECT * FROM customer ORDER BY customer_id ASC'
const getCustomerById = 'SELECT * FROM customer WHERE customer_id = $1'
const updateCustomer = 'UPDATE customer SET name = $1 WHERE customer_id = $2'

const getProduct = 'SELECT * FROM product ORDER BY product_id ASC'

module.exports = {
    getCompany,
    getCompanyById,
    getCustomer,
    getCustomerById,
    updateCustomer,
    getProduct

}