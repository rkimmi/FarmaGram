const config = require('./knexfile').development
const knex = require('knex')

const db = knex(config)

function displayHome (testDb) {
  const conn = testDb || db
  return conn('users')
    .join('images', 'images.user_id', 'users.id')
    .select('users.id', 'users.name', 'images.url')
}

function getUserProfile (userId) {
  return knex('profiles')
    .join('users', 'users.id', 'profiles.user_id')
    .where('users.id', userId)
    .select('users.id as userId', 'users.name as userName', 'users.name as animalName',
      'profiles.id as profileId', 'profiles.bio as bio', 'profiles.email as email')
}

function getImagesOfProfile (userId) {
  return knex('images')
    .join('users', 'users.id', 'images.user_id')
    .where('users.id', 'images.user_id')
    .select('images.id as imgId', 'images.title as title', 'images.url as url')
}

module.exports = {
  getUserProfile,
  getImagesOfProfile,
  displayHome
}
