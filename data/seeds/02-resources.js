
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {
          resource_name: 'Preserved Mosquito',
          description: 'Dino-aged mosquito trapped in fossilized amber.'
        },
        {
          resource_name: 'Private Island'
        },
        {
          resource_name: 'Science Guys',
          description: 'Probably not Bill Nye...'
        },
        {
          resource_name: 'Vans',
          description: 'Big and sturdy ones.'
        }
      ]);
    });
};
