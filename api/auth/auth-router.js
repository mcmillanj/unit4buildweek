const router = require('express').Router()

// const Users = require('../users/user-model')
const { validator } = require('../global-middleware')
const { userSchema } = require('../users/user-schema')
const { usernameIsUnique, userIdExists } = require('../users/user-middleware')


const { hashPassword, authenticate, constructToken } = require('./auth-middleware')

// [POST] /api/auth/register
router.post(
  '/register',
  [validator(userSchema), usernameIsUnique, hashPassword],
  (req, res, next) => {
    res.status(201).json({ message: '[POST] /api/auth/register' })
  }
)

// [POST] /api/auth/login
router.post(
  '/login',
  [validator(userSchema), userIdExists, authenticate, constructToken],
  (req, res, next) => {
    res.json({ message: '[POST] /api/auth/login', data: {} })
  }
)

// [GET] /api/auth/logout
router.get('/logout', (req, res, next) => {
  res.json({ message: '[GET] /api/auth/logout' })
})

module.exports = router
