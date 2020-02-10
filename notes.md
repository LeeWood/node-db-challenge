- DB will revolve arount projects, tasks, and resource.
  - Projects will have multiple tasks,
  - tasks will only belong to one proj.
  - resources are added thing in each project.

# TABLES:
- *projects*
  - [x] id
  - [x] proj_name
  - [x] description (opt)
  - [x] completed (boolean, false if null) 

- *resources*
  - [x] id
  - [x] resourse_name (unique)
  - [x] description (opt)
  
- *tasks*
  - [x] id
  - [x] description
  - [x] notes (opt)
  - [x] completed (boolean, false if null) `defaultTo(false)`
  - [x] proj_id (__FK__)

- *project_resources* 
  - [ ] proj_id (__FK__)
  - [ ] task_id (__FK__)
  - [ ] *COMPOSITE PRIMARY KEY*

# Setup order:
- [x] npm init
- [x] yarn add dependencies
- [x] make sure script file is set up so nodemon runs with server command
- [x] knex init and set up knex file...
- [x] run migration make for migrations files
- [x] visually plan out schema based on MVP requirements :D 
- [x] write up and down migration functions to create tables
- [x] knex migrate:latest to make db3 file...
- [x] check set up on SQLite Studio to make sure it's all kosher
- [x] run knex:seed make for all seed files in the order they are created in the migration files.
- [x] write seed code.
- [x] knex seed:run
- [x] check that data is correct and in place in SQLite Studio.
- [x] set up first table router and model files.
- [x] Set up server files...db-config.js (in data folder), index.js (root), and server.js (root) files.
- [x] check that server runs
- [x] Flesh out projects-model then projects-router page for endpoints
- [ ] Flesh out resources-model then resources-router page for endpoints
- [ ] Flesh out tasks-model then tasks-router page for endpoints 
- [ ] Stretch goals if time!