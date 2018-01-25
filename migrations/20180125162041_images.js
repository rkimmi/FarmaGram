
exports.up = (knex, Promise) => {
  return knex.schema.createTable('images', table => {
    table.increments('id').primary()
    table.string('url')
    table.integer('user_id').references('users.id')
    table.string('title')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('images')
}
