'use strict';

const express = require('express');
const router = express.Router();

// GET home is a login?
router.get('/', (req, res) => {
  // res.render('form');
  res.render('login');
});

// POST login info
router.post('/', (req, res) => {
  res.send('you have logged in');
  //res.redirect(`/form/${res.uid}`) ?
});

// GET form to input day/steps/weight
router.get('/form/:id', (req, res) => {
  //req.params.id
  res.render('form');
});

// POST the form
router.post('/form', (req, res) => {
  res.send('you have posted some info');
  //res.redirect(`/chart/${uid of some sort}`);
});

// GET chart
router.get('/chart/:id', (req, res) => {
  res.render('../views/chart');
});

module.exports = router;
