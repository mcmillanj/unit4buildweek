const router = require('express').Router()
const users = require('./user-model.js')

const { validator } = require('../global-middleware')
const { userSchema } = require('./user-schema')
const { userIdExists } = require('./user-middleware')

// [GET] /api/users
router.get('/', (req, res, next) => {
  users.find()
  .then(users => {
    res.json(users);
  })
  .catch(next)
});
  

// [GET] /api/users/:user_id
router.get('/:user_id', userIdExists, (req, res, next) => {
  const id = req.params.user_id
    users.findById(id)
    .then(user => {
        if(user){
          res.status(200)
          .json(user)
        } else {
          res.status(404)
          .json({ message: "The user  could not be found."})
        }
    })
    .catch(error => {
        res
        .status(500)
        .json({ message: "The server could not retrieve the user. Error on server end.", error})
    })
})

 

// [GET] /api/users/:user_id/items
router.get('/:user_id/items', userIdExists, (req, res, next) => {
   users.findBy('users.user_id','items','items.user_id')   
      .then((item) => {
        req.items = item
        next()
      })
      .catch(next)

      
  })

  


// [PUT] /api/users/:user_id
router.put('/:user_id', [validator(userSchema), userIdExists], (req, res, next) => {
   users.add(req.params.user_id, req.body.items)
  .then(item => {
    res.json(item);
  })
  .catch(error => {
    next(error);
  });
});
  


module.exports = router
