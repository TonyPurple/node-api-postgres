const getCompany = 'SELECT * FROM company ORDER BY company_id ASC'
const getCompanyById = 'SELECT * FROM company WHERE company_id = $1'

const getCustomer = 'SELECT * FROM customer ORDER BY customer_id ASC'
const getCustomerById = 'SELECT * FROM customer WHERE customer_id = $1'
const updateCustomer = 'UPDATE customer SET name = $1 WHERE customer_id = $2'

const getProduct = 'SELECT * FROM product ORDER BY product_id ASC'
const getProductById = 'SELECT * FROM product WHERE product_id = $1'
const createProduct = 'INSERT INTO product (company_id, name) VALUES ($1, $2) RETURNING *'

const getSales = 'SELECT * FROM sales ORDER BY sales_id ASC'
const getSalesById = 'SELECT * FROM sales WHERE sales_id = $1'
const createSale = 'INSERT INTO sales (company_id, customer_id, product_id) VALUES ($1, $2, $3) RETURNING *'
const deleteSale = 'DELETE FROM sales WHERE sales_id = $1'

module.exports = {
    getCompany,
    getCompanyById,
    getCustomer,
    getCustomerById,
    updateCustomer,
    getProduct,
    getProductById,
    createProduct,
    getSales,
    getSalesById,
    createSale,
    deleteSale
}