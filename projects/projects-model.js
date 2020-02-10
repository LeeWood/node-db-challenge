const db = require('../data/db-config.js');

function findProjs() {
  return db('projects');
}

function addProj(project) {
  return db('projects')
    .insert(project);
}

module.exports = {
  findProjs,
  addProj
}