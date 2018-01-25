const config = require('./knexfile').development
const knex = require('knex')

const db = knex(config)

function displayHome (testDb) {
  const conn = testDb || db
  return conn('users')
    .join('images', 'images.user_id', 'users.id')
    .select('users.id', 'users.name', 'images.url')
}

module.exports = {
  displayHome
}
