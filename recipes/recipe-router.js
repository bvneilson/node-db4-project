const express = require('express');
const router = express.Router();

const db = require('./recipe-model.js');

router.post('/recipes', (req, res) => {
  db.addRecipe(req.body).then(response => {
    res.status(200).json(response);
  }).catch(err => {
    res.status(500).json({message: err})
  })
})

module.exports = router;
