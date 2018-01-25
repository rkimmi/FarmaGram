
exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('profiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('profiles').insert([
        {id: 1, bio: 'rowValue1', email: 'mike@gmail.com', user_id: 1},
        {id: 2, bio: 'rowValue2', email: 'pepter@gmail.com', user_id: 2},
        {id: 3, bio: 'rowValue3', email: 'judy@gmail.com', user_id: 3}
      ])
    })
}
