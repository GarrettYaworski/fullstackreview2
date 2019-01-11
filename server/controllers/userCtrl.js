const bcrypt = require('bcryptjs')
users = []

function getUsers(req, res){
  const db = req.app.get('db')
  db.get_users()
  .then(users => res.json(users))
  .catch(err => console.log(err))
}

function login(req, res){
  console.log(req.body)
  for(let i = 0; i<users.length; i++){
    if(users[i].username === req.body.username){
      bcrypt.compare(req.body.password, users[i].password)
      .then(result => {
        if(!result){
          console.log("Wrong passy!!")
        }else{
          console.log('#AllLoggedIn')
        }
      })
    }else{
      console.log('Stranger danger!!')
    }
  }
}

async function register(req, res){
  let hash = await bcrypt.hash(req.body.password, 10)
  users.push({username: req.body.username, password: hash})
  req.session.user = {username: req.body.username}
}

module.exports = {
  getUsers,
  login,
  register
}