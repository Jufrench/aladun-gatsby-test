const http = require('http')
const express = require('express')
const dotenv = require('dotenv')
dotenv.config({ path: './.env' }) // THIS WORKS!!! Provides access to access tokens
// dotenv.config({ path: `./.env.${process.env.NODE_ENV}` }) // Provides access to access tokens
// const path = require('path')
// const fetch = require('node-fetch')
const app = express()
const port = process.env.PORT || 3001
const { Client, Environment, ApiError } = require("square")
const client = new Client({
  accessToken: process.env.PROD_ACCESS_TOKEN,
  environment: Environment.Production,
})
const { customersApi } = client
const { REACT_APP_API_URL } = process.env

// console.log('REACT_APP_API_URL:', REACT_APP_API_URL)
// console.log('process.env:', process.env)
console.log('NODE_ENV:', process.env)

// Heroku server connection
http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"})
  response.end("Hello World\n")
}).listen(process.env.PORT)

// ======== MIDDLEWARE/DEPENDENCIES ===========
// Cors for cross origin allowance
const cors = require('cors')
app.use(cors())

// app.use(express.static('client'))
// const bodyParser = require('body-parser')
// // app.use(express.static('client/index.html'))

// // body-parser
// app.use(bodyParser.urlencoded({ extended: false }))
// // Telling body-parser to use JSON
// app.use(bodyParser.json())

app.listen(port, () => console.log(`Server running on port: ${port}`))

const getCustomers = async () => {
  try {
    let response = await client.customersApi.listCustomers()
    // TODO: figure out how to use response.result
    // by making a method out of BigInt to JSON
    // look at square forum post
    return response.body
    // return response.result
  } catch(error) {
    console.log(error)
  }
}

app.get('/customers', async (req, res) => {
  // getCustomers().then(customers => res.send(customers))
  getCustomers().then(customers => {
    console.log('getting customers...', customers)
    res.send(customers)
  })
})