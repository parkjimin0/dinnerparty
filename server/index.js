const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const db = require('./db/db.js');

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', require('./api'));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '..', 'public/index.html'));
});

app.use(function(err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res
    .status(err.status || 500)
    .send(err.message || 'Internal server error you fool.');
});

const port = process.env.PORT || 3000;

db.sync() // sync our database
  .then(function() {
    app.listen(port, function() {
      console.log(`Your server is listening on port ${port} yo`);
    }); // then start listening with our express server once we have synced
  });
