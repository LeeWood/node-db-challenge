const express = require('express');
const Tasks = require('./tasks-model.js');
const router = express.Router();

router.get('/', (req, res) => {

  Tasks.findTasks()
    .then(tasks => {
      res.json(tasks);
    })
    .catch(err => {
      res.status(500).json({
        message: 'Failed to retrieve tasks.',
        error: err
      });
    });
});

router.post('/', (req, res) => {

  const taskData = req.body;

  Tasks.addTask(taskData)
    .then(task => {
      res.status(201).json(task);
    })
    .catch(err => {
      res.status(500).json({
        message: 'Failed to add new task',
        error: err
      });
    });
});

module.exports = router;