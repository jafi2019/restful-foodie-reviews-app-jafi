const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const Sauce = require('./models/sauce');


// connecting to MongoDB Atlas using installed Mongoose
mongoose.connect('mongodb+srv://jafi2019:t5T63Y4vPaMGeCu@cluster0-t2khm.mongodb.net/test?retryWrites=true',{ useNewUrlParser: true })
  .then(() => {
    console.log('Successfully connected to MongoDB Atlas!');
  })
  .catch((error) => {
    console.log('Unable to connect to MongoDB Atlas!');
    console.error(error);
  });


// middleware to allow requests from all origins to access the API
//Headers  allowing localhost:3000 and localhost:4200 to be able to communicate with each other
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});


//
app.use(bodyParser.json());


// Saving (Post) sauces to the database
app.post('/api/sauces', (req, res, next) => {
  const sauce = new Sauce({
    title: req.body.title,
    ingredients: req.body.ingredients,
    instructions: req.body.instructions,
    difficulty: req.body.difficulty,
    time: req.body.time
  });
  sauce.save().then(
    () => {
      res.status(201).json({
        message: 'Post saved successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
});



//Retrieving a specific sauce route
app.get('/api/sauces/:id', (req, res, next) => {
  sauce.findOne({
    _id: req.params.id
  }).then(
    (sauce) => {
      res.status(200).json(sauce);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
});


// Updating sauce Route
app.put('/api/sauces/:id', (req, res, next) => {
  const sauce = new sauce({
    _id: req.params.id,
    title: req.body.title,
    ingredients: req.body.ingredients,
    instructions: req.body.instructions,
    difficulty: req.body.difficulty,
    time: req.body.time

  });
  sauce.updateOne({_id: req.params.id}, sauce).then(
    () => {
      res.status(201).json({
        message: 'sauce updated successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
});


// Deleting sauce Route
app.delete('/api/sauces/:id', (req, res, next) => {
  sauce.deleteOne({_id: req.params.id}).then(
    () => {
      res.status(200).json({
        message: 'sauce Deleted!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
});

//Retrieving the list of all sauces in database
app.use('/api/sauces', (req, res, next) => {
  sauce.find().then(
    (sauces) => {
      res.status(200).json(sauces);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
});

module.exports = app;