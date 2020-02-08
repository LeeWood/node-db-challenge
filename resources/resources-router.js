const express = require('express');
const Resources = require('./resources-model');
const router =  express.Router();

router.get('/', (req, res) => {

  Resources.findResources()
    .then(resources => {
      res.json(resources);
    })
    .catch(err => {
      res.status(500).json({
        message: 'Failed to retrieve resources',
        error: err
      });
    });
});

router.post('/', async (req, res) => {

  const resourceData = req.body;

  Resources.addResource(resourceData)
    .then(resource => {
      res.status(201).json(resource);
    })
    .catch(err => {
      res.status(500).json({
        message: 'Failed to add new resource.',
        error: err
      });
    });
});

module.exports = router;