'use strict';

var utils = require('../utils/writer.js');
var List = require('../service/ListService');

module.exports.listsGET = function listsGET (req, res, next) {
  List.listsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listsNameDefaultGET = function listsNameDefaultGET (req, res, next) {
  var name = req.swagger.params['name'].value;
  var key = req.swagger.params['key'].value;
  List.listsNameDefaultGET(name,key)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listsNameGET = function listsNameGET (req, res, next) {
  var name = req.swagger.params['name'].value;
  List.listsNameGET(name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
