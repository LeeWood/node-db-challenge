const db = require('../data/db-config.js');

function findProj() {
  return db('projects');
}

function addProj(project) {
  return db('projects')
    .insert(project);
}

module.exports = {
  findProj,
  addProj
}