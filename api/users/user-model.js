const db = require('../../data/db-Config')

module.exports = {
  add,
  find,
  findBy,
  findById,
  remove,
  
  findUserIdItems
}

function find() {
  return db('users').select('user_id', 'username').orderBy('id')
}
function findBy(filter) {
  return db('users').where(filter)
}

function findById(user_id) {
  return db('users').select('user_id:', 'username').where({ user_id, }).first()
}

//this is connected to the post user endpoint to add a user
async function add(user) {
  const [user_id] = await db('users').insert(user, ['user_id', 'username', 'password'])

  return findById(user_id)
}

function remove(user_id) {
  return db('users').where({user_id }).del()
}
function findUserIdItems(user_id) {
  return db('user_id')
        .select('user_id',' items', 'users', 'items.user_id','users.user_id') 
       .where({ user_id: user_id });
}