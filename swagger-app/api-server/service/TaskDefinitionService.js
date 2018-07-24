'use strict';


/**
 * Retrieve a list of tasks
 * This endpoint will retrieve a list of task-definitions
 *
 * returns List
 **/
exports.task_definitionsGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "audience" : [ "GENERAL", "JAVA", "DEVELOPMENT" ],
  "name" : "Security Exam",
  "approvedBy" : "buddy",
  "description" : "Take the Endava security exam available here http://endava.com/security-exam",
  "files" : [ {
    "name" : "myFile.txt",
    "link" : "http://documentserver/docs/5aea3961-a858-45ce-95cf-2b0f929dde93",
    "doc-id" : "5aea3961-a858-45ce-95cf-2b0f929dde93"
  }, {
    "name" : "myFile.txt",
    "link" : "http://documentserver/docs/5aea3961-a858-45ce-95cf-2b0f929dde93",
    "doc-id" : "5aea3961-a858-45ce-95cf-2b0f929dde93"
  } ],
  "id" : "49a9b246-3b5a-4c73-a294-816b25a2ff6c",
  "priority" : "High",
  "type" : "self-study"
}, {
  "audience" : [ "GENERAL", "JAVA", "DEVELOPMENT" ],
  "name" : "Security Exam",
  "approvedBy" : "buddy",
  "description" : "Take the Endava security exam available here http://endava.com/security-exam",
  "files" : [ {
    "name" : "myFile.txt",
    "link" : "http://documentserver/docs/5aea3961-a858-45ce-95cf-2b0f929dde93",
    "doc-id" : "5aea3961-a858-45ce-95cf-2b0f929dde93"
  }, {
    "name" : "myFile.txt",
    "link" : "http://documentserver/docs/5aea3961-a858-45ce-95cf-2b0f929dde93",
    "doc-id" : "5aea3961-a858-45ce-95cf-2b0f929dde93"
  } ],
  "id" : "49a9b246-3b5a-4c73-a294-816b25a2ff6c",
  "priority" : "High",
  "type" : "self-study"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete a specific task definition given its id
 *
 * id String Task definition id
 * no response value expected for this operation
 **/
exports.task_definitionsIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retrieve a specific task definition by the given id
 * This endpoint will retrieve a task-definition based on the id received by parameter
 *
 * id String Task definition id
 * returns TaskDefinition
 **/
exports.task_definitionsIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "audience" : [ "GENERAL", "JAVA", "DEVELOPMENT" ],
  "name" : "Security Exam",
  "approvedBy" : "buddy",
  "description" : "Take the Endava security exam available here http://endava.com/security-exam",
  "files" : [ {
    "name" : "myFile.txt",
    "link" : "http://documentserver/docs/5aea3961-a858-45ce-95cf-2b0f929dde93",
    "doc-id" : "5aea3961-a858-45ce-95cf-2b0f929dde93"
  }, {
    "name" : "myFile.txt",
    "link" : "http://documentserver/docs/5aea3961-a858-45ce-95cf-2b0f929dde93",
    "doc-id" : "5aea3961-a858-45ce-95cf-2b0f929dde93"
  } ],
  "id" : "49a9b246-3b5a-4c73-a294-816b25a2ff6c",
  "priority" : "High",
  "type" : "self-study"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create a new task definition
 * This endpoint shall be used to create a new task-definition
 *
 * body TaskDefinition Task Definition data
 * returns Id
 **/
exports.task_definitionsPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : "5aea3961-a858-45ce-95cf-2b0f929dde93"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

