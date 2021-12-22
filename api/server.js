const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const authRouter = require('./auth/auth-router')
const usersRouter = require('./users/user-router')
const itemsRouter = require('./items/items-router')

// const { restricted } = require('./auth/auth-middleware')

const { errorHandling } = require('./global-middleware')

const server = express()

server.use(express.json())
server.use(helmet())
server.use(cors())

server.use('/api/auth', authRouter)
server.use('/api/users', /* restricted,*/ usersRouter)
server.use('/api/items', /* restricted,*/ itemsRouter)

server.use(errorHandling)

module.exports = server
