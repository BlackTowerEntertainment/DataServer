module.exports = function(app) {
  var express = require('express');
  var mapsRouter = express.Router();
  var hordeMode = {
      "_id" : "1",
      "name" : "HordeMode",
      "mapData" : {}
  };

  var debug = {
      "_id" : "2",
      "name" : "Debug",
      "mapData" : {}
  };
  var city6 = {
      "_id" : "3",
      "name" : "City6",
      "mapData" : {}
  };

  var maps = {
      "1" : hordeMode,
      "2" : debug,
      "3" : city6
  }
  mapsRouter.get('/', function(req, res) {
    res.send({
      'maps': [
          hordeMode,
          debug,
          city6
      ]
    });
  });

  mapsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  mapsRouter.get('/:id', function(req, res) {
    res.send({
      'map': maps[req.params.id]
    });
  });

  mapsRouter.put('/:id', function(req, res) {

      req.body._id = req.params.id;
    maps[req.params.id] = req.body;
    res.status(204).end();
    /*res.send({
      'map': {
          'map': maps[req.params.id]
      }
    });*/
  });

  mapsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/maps', mapsRouter);
};
