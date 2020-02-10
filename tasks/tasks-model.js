const db = require('../data/db-config.js');

//tasks should include proj name and proj decription as well

function findTasks() {

  return db('tasks')
    .join('projects', 'projects.id', 'tasks.project_id')
    .select(
      'projects.project_name',
      'projects.description',
      'tasks.description',
      'tasks.notes',
      'tasks.completed'
      );
    //.where({ project_id: id });
}

function addTask(task) {

  return db('tasks')
    .insert(task);
}

module.exports = {
  findTasks,
  addTask
}