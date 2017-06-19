const mongodb = require('mongodb');
const express = require('express');

var url = 'mongodb://localhost:27017/Playhills';
var app = express();
app.get('/', (req, res) => {

});
app.get('/api/stats.json', (req, res) => {
  // Grab stats from MongoDB
  mongodb.connect(url, (err, db) => {
    // Debug
    console.log('Connected!');

    // Return the DB as JSON
    var collection = db.collection('Stats');
    collection.find({}).toArray((err, docs) => {
      res.send(docs);
    });

    // Close Connection
    db.close();
  });
});
app.listen(3000);
