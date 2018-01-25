
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('images').del()
    .then(function () {
      // Inserts seed entries
      return knex('images').insert([
        {
          id: 1,
          title: 'Cows are great!',
          url: '/images/cow/cows1.jpg',
          user_id: 2
        },
        {
          id: 2,
          title: 'Beautiful Cow',
          url: '/images/cow/cows2.jpg',
          user_id: 2
        },
        {
          id: 3,
          title: 'Coolest Cow Ive seen Today',
          url: '/images/cow/cows3.jpg',
          user_id: 2
        },
        {
          id: 4,
          title: 'Spitty Cow',
          url: '/images/cow/cows4.jpg',
          user_id: 2
        },
        {
          id: 5,
          title: 'Moody',
          url: '/images/cow/cows5.jpg',
          user_id: 2
        },
        {
          id: 6,
          title: 'Big Angus Cow',
          url: '/images/cow/cows6.jpg',
          user_id: 2
        },
        {
          id: 7,
          title: 'Baaaaeh',
          url: '/images/sheep/sheep1.jpg',
          user_id: 4
        },
        {
          id: 8,
          title: 'SheepGoat AKA Geep',
          url: '/images/sheep/sheep2.jpg',
          user_id: 4
        },
        {
          id: 9,
          title: 'Wooley Mutton',
          url: '/images/sheep/sheep3.jpg',
          user_id: 4
        },
        {
          id: 10,
          title: 'Grandpas Coat',
          url: '/images/sheep/sheep4.jpg',
          user_id: 4
        },
        {
          id: 11,
          title: 'Lil Baby Sheep',
          url: '/images/sheep/sheep5.jpg',
          user_id: 4
        },
        {
          id: 12,
          title: 'Baa Maaan',
          url: '/images/sheep/sheep6.jpg',
          user_id: 4
        },
        {
          id: 13,
          title: 'ISH sho Fluffy Im gonna die',
          url: '/images/chicken/chickens1.jpg',
          user_id: 5
        },
        {
          id: 14,
          title: 'We be Rollin',
          url: '/images/chicken/chickens2.jpg',
          user_id: 5
        },
        {
          id: 15,
          title: 'Big Chicken',
          url: '/images/chicken/chickens3.jpg',
          user_id: 5
        },
        {
          id: 16,
          title: 'Aw Gorgeous',
          url: '/images/chicken/chickens4.jpg',
          user_id: 5
        },
        {
          id: 17,
          title: 'Oof what is this one',
          url: '/images/chicken/chickens5.jpg',
          user_id: 5
        },
        {
          id: 18,
          title: 'Model Lyf',
          url: '/images/chicken/chickens6.jpg',
          user_id: 5
        },
        {
          id: 19,
          title: 'Big Pig Alert',
          url: '/images/pig/pigs1.png',
          user_id: 1
        },
        {
          id: 20,
          title: 'Oink Oink',
          url: '/images/pig/pigs2.jpg',
          user_id: 1
        },
        {
          id: 21,
          title: 'Aw thats Nice',
          url: '/images/pig/pigs3.jpg',
          user_id: 1
        },
        {
          id: 22,
          title: 'Domestic Pig',
          url: '/images/pig/pigs4.jpg',
          user_id: 1
        },
        {
          id: 23,
          title: 'Lil theif',
          url: '/images/pig/pigs5.jpg',
          user_id: 1
        },ac libero nec ligula consectetuer rhoncus. Nullam velit dui, semper
        {
          id: 24,
          title: 'From that Famous Movie',
          url: '/images/pig/pigs6.jpg',
          user_id: 1
        },
        {
          id: 25,
          title: 'Lets take a selfie',
          url: '/images/rat/rats1.jpg',
          user_id: 3
        },
        {
          id: 26,
          title: 'Cuddley',
          url: '/images/rat/rats2.jpg',
          user_id: 3
        },
        {
          id: 27,
          title: 'If youre into that',
          url: '/images/rat/rats3.jpg',
          user_id: 3
        },
        {
          id: 28,
          title: 'Hanging Out',
          url: '/images/rat/rats4.jpg',
          user_id: 3
        },
        {
          id: 29,
          title: 'Rattata',
          url: '/images/rat/rats5.jpg',
          user_id: 3
        },
        {
          id: 30,
          title: 'Snoozin',
          url: '/images/rat/rats6.jpg',
          user_id: 3
        }
      ])
    })
}
