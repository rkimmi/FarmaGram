
exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('profiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('profiles').insert([
        {id: 1, bio: 'Pigs are everything to me, hope you love them too!', email: 'pig_lover@gmail.com', user_id: 1, profile_img: '/images/pig/pig-profile.jpg'},
        {id: 2, bio: 'Lets get excited about cows.', email: 'i_love_cows@gmail.com', user_id: 2, profile_img: '/images/cow/cow-profile.jpg'},
        {id: 3, bio: 'Rats are adorable bundles of fluff! Check them out on my gram :)', email: 'must_love_rats@gmail.com', user_id: 3, profile_img: '/images/rat/rat-profile.jpg'},
        {id: 4, bio: 'We have collated our fav pics of sheep, for your viewing pleasure!', email: 'sheep_city@gmail.com', user_id: 4, profile_img: '/images/sheep/sheep-profile.jpg'},
        {id: 5, bio: 'Learn fun facts about our feathered friends.', email: 'chick_a_dee_47@gmail.com', user_id: 5, profile_img: '/images/chicken/chicken-profile.jpg'}
      ])
    })
}
