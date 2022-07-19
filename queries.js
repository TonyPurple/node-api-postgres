const getCompany = 'SELECT * FROM company ORDER BY company_id ASC'
const getCompanyById = 'SELECT * FROM company WHERE company_id = $1'

module.exports = {
    getCompany,
    getCompanyById

}