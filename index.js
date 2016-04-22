'use strict';

const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'client')));

app.get('/', (req, res) => {
  res.render('./client/index.html');
});

app.listen(3000);

module.exports = app;
