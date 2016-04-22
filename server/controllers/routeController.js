var mongoose = require('mongoose');
var Route = require('../models/routeModel.js');

exports.getAllRoutes = function(req, res) {

  Route.find({}, function(err, routes) {
    if (err) {
      logger.error('ERROR in getAllPOI: ', err);
      return res.json(err);
    } 
      
    // logger.info('Successfully retrieved pois: ' + pois);
    res.json(routes); 
  });
};

exports.getOneRoute = function(req, res) {
  const routeId = req.params._id;
  console.log('checking this req.params', req.params);
  Route.findOne({_id: routeId}, function(err, route) {
    if (err) {
      logger.error('ERROR in retrieving route: ', err);
      res.status(404);
      res.end();
      return;
    }
    console.log('server found this route on the server:', route)
    res.json(route);
  });
};