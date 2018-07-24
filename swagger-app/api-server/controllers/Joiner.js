'use strict';

var utils = require('../utils/writer.js');
var Joiner = require('../service/JoinerService');

module.exports.joinersEmailDELETE = function joinersEmailDELETE (req, res, next) {
  var email = req.swagger.params['email'].value;
  Joiner.joinersEmailDELETE(email)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.joinersEmailGET = function joinersEmailGET (req, res, next) {
  var email = req.swagger.params['email'].value;
  Joiner.joinersEmailGET(email)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.joinersGET = function joinersGET (req, res, next) {
  Joiner.joinersGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.joinersPOST = function joinersPOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  Joiner.joinersPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
