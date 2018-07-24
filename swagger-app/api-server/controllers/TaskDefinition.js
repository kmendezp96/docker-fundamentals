'use strict';

var utils = require('../utils/writer.js');
var TaskDefinition = require('../service/TaskDefinitionService');

module.exports.task_definitionsGET = function task_definitionsGET (req, res, next) {
  TaskDefinition.task_definitionsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.task_definitionsIdDELETE = function task_definitionsIdDELETE (req, res, next) {
  var id = req.swagger.params['id'].value;
  TaskDefinition.task_definitionsIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.task_definitionsIdGET = function task_definitionsIdGET (req, res, next) {
  var id = req.swagger.params['id'].value;
  TaskDefinition.task_definitionsIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.task_definitionsPOST = function task_definitionsPOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  TaskDefinition.task_definitionsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
