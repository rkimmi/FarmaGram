const config = require('./knexfile').development
const knex = require('knex')

const db = knex(config)

function displayHome (testDb) {
  const conn = testDb || db
  return conn('users')
    .join('images', 'images.user_id', 'users.id')
    .select('users.id', 'users.user_name', 'images.url')
}

function getUserProfile (userId, testDb) {
  const conn = testDb || db
  return conn('profiles')
    .join('users', 'users.id', 'profiles.user_id')
    .where('users.id', userId)
    .select('users.id as userId', 'users.user_name as userName', 'users.name as animalName',
      'profiles.id as profileId', 'profiles.bio as bio', 'profiles.email as email', 'profiles.profile_img as profileImg')
}

function getImagesOfProfile (userId, testDb) {
  const conn = testDb || db
  return conn('images')
    .join('users', 'users.id', 'images.user_id')
    .where('users.id', userId)
    .select('images.id as imgId', 'images.title as title', 'images.url as url')
}

function addPicture (input, testDb) {
  const conn = testDb || db
  console.log(input)
  return conn('images')
    .insert({
      title: input.title,
      url: input.url,
      user_id: input.id
    })
}

function displayImage (input, testDb) {
  const conn = testDb || db
  return conn('users')
    .join('images', 'images.user_id', 'users.id')
    .join('profiles', 'profiles.user_id', 'users.id')
    .where('images.id', input)
    .select('profiles.profile_img as profileImage', 'users.user_name as userName', 'images.url as url', 'images.title as title')
}

module.exports = {
  getUserProfile,
  getImagesOfProfile,
  displayHome,
  addPicture,
  displayImage
}
