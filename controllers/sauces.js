// in controllers/sauces.js

const Sauces = require('../models/hottakes');

exports.createHottakes = (req, res, next) => {
  const hottakes = new Hottakes({
    name: req.body.name,
    manufacturer: req.body.manufacturer,
    description: req.body.description,
    heat: req.body.heat,
    likes: req.body.likes,
    dislikes: req.body.dislikes,
    imageUrl: req.body.imageUrl,
    mainPepper: req.body.mainPepper,
    usersLiked: req.body.kedusersLiked,
    usersDisliked: req.body.usersDisliked,
    userId: req.body. userId,
  });
  hottakes.save().then(
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
};


exports.getOneHottakes = (req, res, next) => {
  Hottakes.findOne({
    _id: req.params.id
  }).then(
    (hottakes) => {
      res.status(200).json(hottakes);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};

exports.modifyHottakes = (req, res, next) => {
  const hottakes = new Hottakes({
    name: req.body.name,
    manufacturer: req.body.manufacturer,
    description: req.body.description,
    heat: req.body.heat,
    likes: req.body.likes,
    dislikes: req.body.dislikes,
    imageUrl: req.body.imageUrl,
    mainPepper: req.body.mainPepper,
    usersLiked: req.body.kedusersLiked,
    usersDisliked: req.body.usersDisliked,
    userId: req.body. userId,
  });
  Hottakes.updateOne({_id: req.params.id}, hottakes).then(
    () => {
      res.status(201).json({
        message: 'Hottakes updated successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.deleteHottakes = (req, res, next) => {
  Hottakes.deleteOne({_id: req.params.id}).then(
    () => {
      res.status(200).json({
        message: 'Deleted!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.getAllSauces = (req, res, next) => {
  Hottakes.find().then(
    (hottakes) => {
      res.status(200).json(hottakes);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};