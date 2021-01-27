const express = require('express')
const express = require('../products.json')
const getProducts = require('./getProducts')
const getProduct = requre('./getProduct')

const app = express()

const port = 3000

app.get( '/api/products', getProducts)
app.get( '/api/products/:id', getProduct)

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`)
})

