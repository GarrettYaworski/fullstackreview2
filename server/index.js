require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const bcrypt = require('bcryptjs')
const { json } = require('body-parser')
const { getUsers, login, register } = require('./controllers/userCtrl')
const { getProducts, addToCart, getCart } = require('./controllers/productCtrl')

const app = express()
app.use(json())

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7 * 2
  }
}))

const cartCheck = (req, res, next) => {
  if(!req.session.cart){
    req.session.cart = []
  }
  next()
}

massive(process.env.CONNECTION_STRING)
.then(db => app.set('db', db))
.catch(err => console.log(err))

//USER ENPOINTS
app.get('/api/users', getUsers)
app.post('/api/login', login)
app.post('/api/register', register)

//PRODUCT ENDPOINTS
app.get('/api/products', getProducts)

//CART ENDPOINTS
app.post('/api/addtocart', cartCheck, addToCart)
app.get('/api/getcart', cartCheck, getCart)


app.listen(process.env.SERVER_PORT, () => console.log(`Listening on port ${process.env.SERVER_PORT}`))