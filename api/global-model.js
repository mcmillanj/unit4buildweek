const db = require('../data/db-config')

const get = (table) => db(table)

const getBy = (table, filter) => {
  return db(table).where(filter).first()
}

const getOn = (first, second, primary, secondary, filter, select = ['*']) => {
  return db(first).where(filter).leftJoin(second, primary, secondary).select(select).first()
}

const add = (table, obj, select = ['*']) => {
  return db(table).insert(obj, select)
}

// i.e. Model.update('items', { item_id }, updatedItem)
const update = (table, filter, obj, select = ['*']) => {
  return db(table).where(filter).update(obj, select)
}

// i.e. Model.remove('items', { item_id: 'items_id' })
const remove = (table, filter) => {
  return db(table).where(filter).delete()
}

module.exports = {
  get,
  getBy,
  getOn,
  add,
  update,
  remove,
}
