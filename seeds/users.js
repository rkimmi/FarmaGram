
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'Pigs World', user_name: 'pig_lover'},
        {id: 2, name: 'EarthCows', user_name: 'i_love_cows'},
        {id: 3, name: 'I Love Rats', user_name: 'must_love_rats'},
        {id: 4, name: 'Sheep Are Life', user_name: 'sheep_city'},
        {id: 5, name: 'Happy Chickens', user_name: 'chick_a_dee_47'}
      ])
    })
}
