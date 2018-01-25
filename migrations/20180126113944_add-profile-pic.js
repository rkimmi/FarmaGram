
exports.up = (knex, Promise) => {
  return knex.schema.table('profiles', table => {
    table.string('profile_img')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.table('profiles', table => {
    table.dropColumn('profile_img')
  })
}
