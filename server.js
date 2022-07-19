const express = require('express')
const routes = require('./routes')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

//middleware
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
    response.status(200).json({ info: 'Node.js, Express, and Postgres API' })
  })

app.use('/v1', routes)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })