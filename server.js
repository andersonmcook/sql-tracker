'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;

app.set('view engine', 'jade');
app.use(bodyParser.urlencoded({extended: false}));


// GET home is a login?
app.get('/', (req, res) => {
  res.send('form');
});

// POST login info
app.post('/', (req, res) => {
  res.send('you have logged in');
  //res.redirect(`/form/${res.uid}`) ?
});

// GET form to input day/steps/weight
app.get('/form/:id', (req, res) => {
  //req.params.id
  res.send(`Enter your weight and steps for the day, ${req.params.id}.`);
});

// POST the form
app.post('/form', (req, res) => {
  res.send('you have posted some info');
  //res.redirect(`/chart/${uid of some sort}`);
});

// GET chart
app.get('/chart/:id', (req, res) => {
  res.send('a chart');
});

// listen
app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});
