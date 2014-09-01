'use strict';

var Application     = require('./application.model');
var config      = require('../../config/environment');

/**
 * Get list of applications
 * restriction: 'admin'
 */
// Get list of servers
exports.index = function(req, res) {
  Application.find(function (err, applications) {
    if(err) { return handleError(res, err); }
    return res.json(200, applications);
  });
};

// Get a single server
exports.show = function(req, res) {
  Application.findById(req.params.id, function (err, application) {
    if(err) { return handleError(res, err); }
    if(!application) { return res.send(404); }
    return res.json(application);
  });
};

/**
 * Creates a new user
 */
exports.create = function (req, res, next) {
  var application = new Application ();
  application.user = req.user;
  application.charName = req.body.charName;
  application.charClass = req.body.charClass;
  application.charSpec = req.body.charSpec;
  application.charOffSpec = req.body.charOffSpec;
  application.charArmory = req.body.charArmory;
  application.charLogs = req.body.charLogs;
  application.heroicXP = req.body.heroicXP;
  application.pastGuilds = req.body.pastGuilds;
  application.microphone = req.body.microphone;
  application.pcSpecs = req.body.pcSpecs;
  application.uiScreenshot = req.body.uiScreenshot;
  application.whyTS = req.body.whyTS;



  application.save(function(err, application) {
    if (err) 
      res.send(err);
    res.json({ message: 'application saved to the database', data: application });
  });
};

// Updates an existing server in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Application.findById(req.params.id, function (err, application) {
    if (err) { return handleError(res, err); }
    if(!application) { return res.send(404); }
    var updated = _.merge(application, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, application);
    });
  });
};

// Deletes a server from the DB.
exports.destroy = function(req, res) {
  Application.findById(req.params.id, function (err, application) {
    if(err) { return handleError(res, err); }
    if(!application) { return res.send(404); }
    application.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}