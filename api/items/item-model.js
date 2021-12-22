const db = require('../../data/db-config')

const get = () => db('items')

const getBy = (filter) => db('items').where(filter).first()

const add = (item) => {
  return db('items').insert(item, ['*'])
}

module.exports = {
  get,
  getBy,
  add,
}