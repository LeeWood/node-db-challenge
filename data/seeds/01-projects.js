
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          project_name: 'Bring back the dinosaurs.',
          description: 'Re-populate the forests with those big, big reptile boys.',
          completed: false
        }
      ]);
    });
};
