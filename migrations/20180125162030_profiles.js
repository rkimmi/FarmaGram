
exports.up = (knex, Promise) => {
  return knex.schema.createTable('profiles', table => {
    table.increments('id').primary()
    table.string('bio')
    table.string('email')
    table.integer('user_id').references('users.id')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('profiles')
}
