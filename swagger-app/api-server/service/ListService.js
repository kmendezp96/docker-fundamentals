'use strict';


/**
 * Returns all the lists available in the system.
 * This endpoint will retrieve an array containing all the lists available in the system
 *
 * returns List
 **/
exports.listsGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "name" : "grade",
  "default" : [ {
    "value" : "SE",
    "text" : "Senior Engineer"
  } ],
  "items" : [ {
    "value" : "SE",
    "text" : "Senior Engineer"
  }, {
    "value" : "EN",
    "text" : "Engineer"
  }, {
    "value" : "CL",
    "text" : "Consultant"
  } ]
}, {
  "name" : "discipline",
  "default" : [ {
    "value" : "dev",
    "text" : "Development"
  } ],
  "items" : [ {
    "value" : "dev",
    "text" : "Development"
  }, {
    "value" : "test",
    "text" : "Testing"
  }, {
    "value" : "am",
    "text" : "Application Management"
  } ]
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns the default value or item for a specific list.
 * This endpoint will retrieve the default value of a list based on the list name and key received by path parameter and query parameter respectively. The default value of a list may depend of certain context, usually some user selections or actions. the `key` parameter should be used to describe this context to get the appropriated default value. If the `key` parameter is not specified the response would be the general default value of the list.
 *
 * name String The name of the list that is expexted to obtain
 * key String The key that determine the default value of the list. (Lists default value may depend on some user selections) (optional)
 * returns ListItem
 **/
exports.listsNameDefaultGET = function(name,key) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "text" : "Senior Engineer",
  "value" : "SE"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns a specific list.
 * This endpoint will retrieve a list of values based on the name received by parameter
 *
 * name String The name of the list that is expexted to obtain
 * returns List
 **/
exports.listsNameGET = function(name) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "default" : {
    "text" : "Senior Engineer",
    "value" : "SE"
  },
  "name" : "grade",
  "items" : [ {
    "value" : "SE",
    "text" : "Senior Engineer"
  }, {
    "value" : "EN",
    "text" : "Engineer"
  }, {
    "value" : "CL",
    "text" : "Consultant"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

