
exports.up = function(knex) {
  return(
    knex.schema
      .createTable('projects', tbl => {
        tbl.increments();
        tbl.string('project_name', 128)
          .unique()
          .notNullable();
        tbl.string('description', 128);
        tbl.boolean('completed').defaultTo(false);
      })
      .createTable('resources', tbl => {
        tbl.increments();
        tbl.string('resource_name', 128)
          .notNullable()
          .unique()
        tbl.string('description', 128);
      })
      .createTable('tasks', tbl => {
        tbl.increments();
        tbl.string('description', 128)
          .notNullable();
        tbl.string('notes', 128);
        tbl.boolean('completed').defaultTo(false);
        tbl.integer('project_id')
          .unsigned()
          .notNullable()
          .references('projects.id')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');
      })
      .createTable('project_resources', tbl => {
        tbl.integer('project_id')
          .unsigned()
          .notNullable()
          .references('projects.id')
          .onDelete('CASCADE')
          .onUpdate('CASCADE')
        tbl.integer('resource_id')
          .unsigned()
          .notNullable()
          .references('resources.id')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');
        tbl.primary(['project_id', 'resource_id']);
      })
  );
};

exports.down = function(knex) {
  return (
    knex.schema
      .dropTableIfExists('project_resources')
      .dropTableIfExists('tasks')
      .dropTableIfExists('resources')
      .dropTableIfExists('projects')
  );
};
