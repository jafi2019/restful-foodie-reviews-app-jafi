

const express = require('express');
const router = express.Router();

const saucesCtrl = require('../controllers/sauces');

router.get('/', saucesCtrl.getAllSauces);
router.post('/', saucesCtrl.createHottakes);
router.get('/:id', saucesCtrl.getOneHottakes);
router.put('/:id', saucesCtrl.modifyHottakes);
router.delete('/:id', saucesCtrl.deleteHottakes);

module.exports = router;



/* const express = require('express');

const router = express.Router();
const Hottakes = require('../models/hottakes');


router.post('/', (req, res, next) => {
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
  });

  router.use('/', (req, res, next) => {
    const sauces = [
      {
        _id: 'id',
        name: 'name',
        manufacturer: 'manufacturer',
        description: 'description',
        heat: 'heat',
        likes: 'likes',
        dislikes: 'dislikes',
        imageUrl: 'imageUrl',
        mainPepper:' mainPepper',
        usersLiked: 'kedusersLiked',
        usersDisliked: 'usersDisliked',
        userId: 'userId',
      },
    ];
    res.status(200).json(sauces);
  });


  
  router.get('/:id', (req, res, next) => {
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
  });


  router.put('/:id', (req, res, next) => {
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
  });


  router.delete('/:id', (req, res, next) => {
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
  });

  router.get('/', (req, res, next) => {
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
  });

module.exports = router; */