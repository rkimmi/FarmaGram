
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('images').del()
    .then(function () {
      // Inserts seed entries
      return knex('images').insert([
        {
          id: 1,
          title: "nibh enim, gravida sit amet, dapibus id, blandit at, nisi.",
          url: "est, vitae sodales nisi magna sed dui. Fusce aliquam, enim",
          user_id: 1
        },
        {
          id: 2,
          title: "Sed nunc est, mollis non, cursus non, egestas a, dui.",
          url: "nec, diam. Duis mi enim, condimentum eget, volutpat ornare, facilisis",
          user_id: 3
        },
        {
          id: 3,
          title: "Cras eu tellus eu augue porttitor interdum. Sed auctor odio",
          url: "nisi sem semper erat, in consectetuer ipsum nunc id enim.",
          user_id: 4
        },
        {
          id: 4,
          title: "et, rutrum eu, ultrices sit amet, risus. Donec nibh enim,",
          url: "laoreet ipsum. Curabitur consequat, lectus sit amet luctus vulputate, nisi",
          user_id: 4
        },
        {
          id: 5,
          title: "lorem eu metus. In lorem. Donec elementum, lorem ut aliquam",
          url: "eu nibh vulputate mauris sagittis placerat. Cras dictum ultricies ligula.",
          user_id: 5
        },
        {
          id: 6,
          title: "felis purus ac tellus. Suspendisse sed dolor. Fusce mi lorem,",
          url: "accumsan sed, facilisis vitae, orci. Phasellus dapibus quam quis diam.",
          user_id: 2
        },
        {
          id: 7,
          title: "condimentum. Donec at arcu. Vestibulum ante ipsum primis in faucibus",
          url: "sem. Nulla interdum. Curabitur dictum. Phasellus in felis. Nulla tempor",
          user_id: 2
        },
        {
          id: 8,
          title: "Nulla semper tellus id nunc interdum feugiat. Sed nec metus",
          url: "felis purus ac tellus. Suspendisse sed dolor. Fusce mi lorem,",
          user_id: 3
        },
        {
          id: 9,
          title: "nostra, per inceptos hymenaeos. Mauris ut quam vel sapien imperdiet",
          url: "magnis dis parturient montes, nascetur ridiculus mus. Aenean eget magna.",
          user_id: 5
        },
        {
          id: 10,
          title: "non, egestas a, dui. Cras pellentesque. Sed dictum. Proin eget",
          url: "massa. Vestibulum accumsan neque et nunc. Quisque ornare tortor at",
          user_id: 4
        },
        {
          id: 11,
          title: "rhoncus. Donec est. Nunc ullamcorper, velit in aliquet lobortis, nisi",
          url: "elit pede, malesuada vel, venenatis vel, faucibus id, libero. Donec",
          user_id: 5
        },
        {
          id: 12,
          title: "sem molestie sodales. Mauris blandit enim consequat purus. Maecenas libero",
          url: "vel, convallis in, cursus et, eros. Proin ultrices. Duis volutpat",
          user_id: 5
        },
        {
          id: 13,
          title: "vel pede blandit congue. In scelerisque scelerisque dui. Suspendisse ac",
          url: "tempus mauris erat eget ipsum. Suspendisse sagittis. Nullam vitae diam.",
          user_id: 1
        },
        {
          id: 14,
          title: "mollis dui, in sodales elit erat vitae risus. Duis a",
          url: "fringilla euismod enim. Etiam gravida molestie arcu. Sed eu nibh",
          user_id: 1
        },
        {
          id: 15,
          title: "eu nibh vulputate mauris sagittis placerat. Cras dictum ultricies ligula.",
          url: "nec ante. Maecenas mi felis, adipiscing fringilla, porttitor vulputate, posuere",
          user_id: 1
        },
        {
          id: 16,
          title: "sit amet metus. Aliquam erat volutpat. Nulla facilisis. Suspendisse commodo",
          url: "dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer",
          user_id: 2
        },
        {
          id: 17,
          title: "bibendum. Donec felis orci, adipiscing non, luctus sit amet, faucibus",
          url: "ultricies ligula. Nullam enim. Sed nulla ante, iaculis nec, eleifend",
          user_id: 2
        },
        {
          id: 18,
          title: "est, mollis non, cursus non, egestas a, dui. Cras pellentesque.",
          url: "arcu. Vestibulum ante ipsum primis in faucibus orci luctus et",
          user_id: 2
        },
        {
          id: 19,
          title: "orci, consectetuer euismod est arcu ac orci. Ut semper pretium",
          url: "Nam interdum enim non nisi. Aenean eget metus. In nec",
          user_id: 4
        },
        {
          id: 20,
          title: "Curabitur dictum. Phasellus in felis. Nulla tempor augue ac ipsum.",
          url: "magna. Phasellus dolor elit, pellentesque a, facilisis non, bibendum sed,",
          user_id: 2
        },
        {
          id: 21,
          title: "nibh dolor, nonummy ac, feugiat non, lobortis quis, pede. Suspendisse",
          url: "ante, iaculis nec, eleifend non, dapibus rutrum, justo. Praesent luctus.",
          user_id: 3
        },
        {
          id: 22,
          title: "ullamcorper eu, euismod ac, fermentum vel, mauris. Integer sem elit,",
          url: "amet orci. Ut sagittis lobortis mauris. Suspendisse aliquet molestie tellus.",
          user_id: 1
        },
        {
          id: 23,
          title: "viverra. Maecenas iaculis aliquet diam. Sed diam lorem, auctor quis,",
          url: "Aenean sed pede nec ante blandit viverra. Donec tempus, lorem",
          user_id: 2
        },
        {
          id: 24,
          title: "Donec at arcu. Vestibulum ante ipsum primis in faucibus orci",
          url: "aliquet odio. Etiam ligula tortor, dictum eu, placerat eget, venenatis",
          user_id: 3
        },
        {
          id: 25,
          title: "Suspendisse eleifend. Cras sed leo. Cras vehicula aliquet libero. Integer",
          url: "facilisis eget, ipsum. Donec sollicitudin adipiscing ligula. Aenean gravida nunc",
          user_id: 5
        },
        {
          id: 26,
          title: "quis diam luctus lobortis. Class aptent taciti sociosqu ad litora",
          url: "et tristique pellentesque, tellus sem mollis dui, in sodales elit",
          user_id: 4
        },
        {
          id: 27,
          title: "natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
          url: "massa. Mauris vestibulum, neque sed dictum eleifend, nunc risus varius",
          user_id: 5
        },
        {
          id: 28,
          title: "Aenean eget metus. In nec orci. Donec nibh. Quisque nonummy",
          url: "arcu iaculis enim, sit amet ornare lectus justo eu arcu.",
          user_id: 5
        },
        {
          id: 29,
          title: "vel, vulputate eu, odio. Phasellus at augue id ante dictum",
          url: "risus. Donec egestas. Aliquam nec enim. Nunc ut erat. Sed",
          user_id: 2
        },
        {
          id: 30,
          title: "ac libero nec ligula consectetuer rhoncus. Nullam velit dui, semper",
          url: "semper pretium neque. Morbi quis urna. Nunc quis arcu vel",
          user_id: 4
        }
      ])
    })
}
