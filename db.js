const Pool = require('pg').Pool
const pool = new Pool({
  user: 'anthonyvanoni',
  host: 'localhost',
  database: 'apicompanytest',
  password: 'password',
  port: 5432,
})

module.exports = pool