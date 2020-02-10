
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {
          description: 'Fund all the science team.',
          notes: 'Give them ALL the money to figure out complicated DNA stuff...spare no expense :)',
          completed: true,
          project_id: 1
        },
        {
          description: 'Hatch some baby dinos.',
          completed: false,
          project_id: 1
        },
        {
          description: 'Dino show and tell.',
          notes: 'Show off to some scientists and lawyers and stuff. Ooh, and my grandkids!',
          completed: false,
          project_id: 1
        },
        {
          description: 'Ctrl + Z',
          notes: 'I think I have made a very big mistake...',
          completed: false,
          project_id: 1
        }
      ]);
    });
};
