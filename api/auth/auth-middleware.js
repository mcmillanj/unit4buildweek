const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../../config')

const restricted = (req, res, next) => {
  const token = req.headers.authorization

  if (!token) {
    return next({ status: 401, message: 'token required' })
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return next({ status: 401, message: 'token invalid' })
    }

    req.decodedJwt = decoded
    next()
  })
}

const hashPassword = (req, res, next) => next()

const authenticate = (req, res, next) => next()

const constructToken = (req, res, next) => next()

module.exports = {
  restricted,
  hashPassword,
  authenticate,
  constructToken,
}
