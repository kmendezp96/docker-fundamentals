'use strict';


/**
 * Deletes a joiner
 * This endpoint allows to delete an existing joiner from the system especifying its email address.
 *
 * email String Email address of the joiner that should be removed.
 * no response value expected for this operation
 **/
exports.joinersEmailDELETE = function(email) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retrieve a joiner by its email
 * This endpoint shall be used to retrieve an existing joiner from the system using its email address
 *
 * email String Joiner email
 * returns Joiner
 **/
exports.joinersEmailGET = function(email) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "firstName" : "Andres",
  "lastName" : "Rincon",
  "role" : "Design Lead",
  "lineManager" : "arincon",
  "mainSkill" : "JAVA",
  "grade" : "CL",
  "discipline" : "DEV",
  "careerCoach" : "arincon",
  "buddy" : "arincon",
  "email" : "joiner@endava.com"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns  all the joiners available in the system
 * This endpoint shall be used to retrieve the complete list of joiners registered in the the system
 *
 * returns List
 **/
exports.joinersGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "firstName" : "Andres",
  "lastName" : "Rincon",
  "role" : "Design Lead",
  "lineManager" : "arincon",
  "mainSkill" : "JAVA",
  "grade" : "CL",
  "discipline" : "DEV",
  "careerCoach" : "arincon",
  "buddy" : "arincon",
  "email" : "joiner@endava.com"
}, {
  "firstName" : "Andres",
  "lastName" : "Rincon",
  "role" : "Design Lead",
  "lineManager" : "arincon",
  "mainSkill" : "JAVA",
  "grade" : "CL",
  "discipline" : "DEV",
  "careerCoach" : "arincon",
  "buddy" : "arincon",
  "email" : "joiner@endava.com"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create a joiner
 * This endpoint shall be used to create a new joiner in the system
 *
 * body Joiner Joiner
 * no response value expected for this operation
 **/
exports.joinersPOST = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

