require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const bodyParser = require ('body-parser')

const categoryRoute = require('./src/routes/category')
const userRoute = require('./src/routes/user')
const bookRoute     = require('./src/routes/book')
const borrowingRoute = require('./src/routes/borrowing')

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    next();
  });

app.use(bodyParser.urlencoded({
    extended: true,
}))
app.use(bodyParser.json())

app.use(`/book`, bookRoute)
app.use(`/category`, categoryRoute)
app.use(`/user`, userRoute)
app.use('/pinjam', borrowingRoute)

app.listen(port)
console.log(`Dimulai di port ${port}`)