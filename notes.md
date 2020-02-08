- DB will revolve arount projects, tasks, and resource.
  - Projects will have multiple tasks,
  - tasks will only belong to one proj.
  - resources are added thing in each project.

# TABLES:
- *projects*
  - [ ] id
  - [ ] proj_name
  - [ ] description (opt)
  - [ ] completed (boolean, false if null) 

- *resources*
  - [ ] id
  - [ ] resourse_name (unique)
  - [ ] description (opt)
  
- *tasks*
  - [ ] id
  - [ ] description
  - [ ] notes (opt)
  - [ ] completed (boolean, false if null) `defaultTo(false)`
  - [ ] proj_id (__FK__)

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
- [ ] write seed code.
- [ ] knex seed:run
- [ ] check that data is correct and in place in SQLite Studio.
- [ ] Set up server files...db-config.js (in data folder), index.js (root), and server.js (root) files.
- [ ] set up first table router and model files.
- [ ] check that server runs
- [ ] Flesh out user-model then user-router page for endpoints
- [ ] Flesh out task-model then task-router page for endpoints 
- [ ] Flesh out resource-model then resource-router page for endpoints
- [ ] Stretch goals if time!