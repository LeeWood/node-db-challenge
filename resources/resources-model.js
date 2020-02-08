const db = require('../data/db-config.js');

function findResources() {
  return db('resources');
}

function addResource(resource) {
  return db('resources')
    .insert(resource);
}

module.exports = {
  findResources,
  addResource
}