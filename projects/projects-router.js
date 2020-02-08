const express = require('express');
const Projects = require('./projects-model');
const router = express.Router();

router.get('/', (req, res) => {
  
  Projects.findProj()
    .then(projects => {
      res.json(projects);
    })
    .catch(err => {
      res.status(500).json({
        message: 'Failed to retrieve projects.',
        error: err
      });
    });
});

router.post('/', async (req, res) => {
  
  const projData = req.body;

  Projects.addProj(projData)
    .then(project => {
      res.status(201).json(project);
    })
    .catch(err => {
      res.status(500).json({
        message: 'Failed to add new project',
        error: err
      });
    });
});

module.exports = router;