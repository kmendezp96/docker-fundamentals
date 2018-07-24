'use strict';

var utils = require('../utils/writer.js');
var RampUp = require('../service/RampUpService');

module.exports.rampupsGET = function rampupsGET (req, res, next) {
  var owner = req.swagger.params['owner'].value;
  RampUp.rampupsGET(owner)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.rampupsIdStatusPOST = function rampupsIdStatusPOST (req, res, next) {
  var id = req.swagger.params['id'].value;
  var body = req.swagger.params['body'].value;
  RampUp.rampupsIdStatusPOST(id,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.rampupsIdTasksPOST = function rampupsIdTasksPOST (req, res, next) {
  var id = req.swagger.params['id'].value;
  var body = req.swagger.params['body'].value;
  RampUp.rampupsIdTasksPOST(id,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.rampupsIdTasksTask_idGET = function rampupsIdTasksTask_idGET (req, res, next) {
  var id = req.swagger.params['id'].value;
  var taskId = req.swagger.params['task-id'].value;
  RampUp.rampupsIdTasksTask_idGET(id,taskId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.rampupsIdTasksTask_idStatusPOST = function rampupsIdTasksTask_idStatusPOST (req, res, next) {
  var id = req.swagger.params['id'].value;
  var taskId = req.swagger.params['task-id'].value;
  var body = req.swagger.params['body'].value;
  RampUp.rampupsIdTasksTask_idStatusPOST(id,taskId,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.rampupsPOST = function rampupsPOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  RampUp.rampupsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
