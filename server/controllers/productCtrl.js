function getProducts(req, res){
  const db = req.app.get('db')
  db.get_products()
  .then(products => res.json(products))
  .catch(err => console.log(err))
}

function addToCart(req, res){
  console.log(req.session)
  req.session.cart.push(req.body.product)
  res.sendStatus(200)
}

function getCart(req, res){
  res.status(200).send(req.session.cart)
}

module.exports = {
  getProducts,
  addToCart,
  getCart
}