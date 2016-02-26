'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const path = require('path');
const userRoutes = require('./user/user.route')
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./db/sql-weight-tracker.db');

app.set('view engine', 'jade');

//Compile Sass to CSS:
app.use(require('node-sass-middleware')({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: true,
  sourceMap: true
}));

//Generate paths to static assets in public folder:
app.use(express.static('public'));

// Use body parser
app.use(bodyParser.urlencoded({extended: false}));

// use user.route.js
app.use(userRoutes);

// listen
app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});
