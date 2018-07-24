'use strict';


/**
 * Returns the complete list of active ramp-up processes
 * Returuns the complete list of ramp-up processes available in the system that are in CREATED state. If the owner parameter is  specified, The list will contain only the ones that belong to the specified owner.
 *
 * owner String Ramp up process owner's Id (email), to filter the ramp up processes that belongs to the  specified owner. (optional)
 * returns List
 **/
exports.rampupsGET = function(owner) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "owner" : "owner@mail.com",
  "date" : "2012-04-23T18:25:43.511Z",
  "id" : "5aea3961-a858-45ce-95cf-2b0f929dde93",
  "state" : "CREATED",
  "tasks" : [ {
    "assignedBy" : "juan.perez@endava.com",
    "audience" : [ "GENERAL", "JAVA", "DEVELOPMENT" ],
    "name" : "Endava presentation",
    "approvedBy" : "juan.perez@endava.com",
    "description" : "Read the PPT with the welcome to Endava information.",
    "files" : [ {
      "name" : "myFile.txt",
      "link" : "http://documentserver/docs/5aea3961-a858-45ce-95cf-2b0f929dde93",
      "doc-id" : "5aea3961-a858-45ce-95cf-2b0f929dde93"
    }, {
      "name" : "myFile.txt",
      "link" : "http://documentserver/docs/5aea3961-a858-45ce-95cf-2b0f929dde93",
      "doc-id" : "5aea3961-a858-45ce-95cf-2b0f929dde93"
    } ],
    "id" : "5aea3961-a858-45ce-95cf-2b0f929dde93",
    "assignee" : "juan.perez@endava.com",
    "priority" : "High",
    "type" : "self-study",
    "taskDefinitionId" : "5aea3961-a858-45ce-95cf-2b0f929dde93",
    "status" : "IN-PROGRESS"
  }, {
    "assignedBy" : "juan.perez@endava.com",
    "audience" : [ "GENERAL", "JAVA", "DEVELOPMENT" ],
    "name" : "Endava presentation",
    "approvedBy" : "juan.perez@endava.com",
    "description" : "Read the PPT with the welcome to Endava information.",
    "files" : [ {
      "name" : "myFile.txt",
      "link" : "http://documentserver/docs/5aea3961-a858-45ce-95cf-2b0f929dde93",
      "doc-id" : "5aea3961-a858-45ce-95cf-2b0f929dde93"
    }, {
      "name" : "myFile.txt",
      "link" : "http://documentserver/docs/5aea3961-a858-45ce-95cf-2b0f929dde93",
      "doc-id" : "5aea3961-a858-45ce-95cf-2b0f929dde93"
    } ],
    "id" : "5aea3961-a858-45ce-95cf-2b0f929dde93",
    "assignee" : "juan.perez@endava.com",
    "priority" : "High",
    "type" : "self-study",
    "taskDefinitionId" : "5aea3961-a858-45ce-95cf-2b0f929dde93",
    "status" : "IN-PROGRESS"
  } ]
}, {
  "owner" : "owner@mail.com",
  "date" : "2012-04-23T18:25:43.511Z",
  "id" : "5aea3961-a858-45ce-95cf-2b0f929dde93",
  "state" : "CREATED",
  "tasks" : [ {
    "assignedBy" : "juan.perez@endava.com",
    "audience" : [ "GENERAL", "JAVA", "DEVELOPMENT" ],
    "name" : "Endava presentation",
    "approvedBy" : "juan.perez@endava.com",
    "description" : "Read the PPT with the welcome to Endava information.",
    "files" : [ {
      "name" : "myFile.txt",
      "link" : "http://documentserver/docs/5aea3961-a858-45ce-95cf-2b0f929dde93",
      "doc-id" : "5aea3961-a858-45ce-95cf-2b0f929dde93"
    }, {
      "name" : "myFile.txt",
      "link" : "http://documentserver/docs/5aea3961-a858-45ce-95cf-2b0f929dde93",
      "doc-id" : "5aea3961-a858-45ce-95cf-2b0f929dde93"
    } ],
    "id" : "5aea3961-a858-45ce-95cf-2b0f929dde93",
    "assignee" : "juan.perez@endava.com",
    "priority" : "High",
    "type" : "self-study",
    "taskDefinitionId" : "5aea3961-a858-45ce-95cf-2b0f929dde93",
    "status" : "IN-PROGRESS"
  }, {
    "assignedBy" : "juan.perez@endava.com",
    "audience" : [ "GENERAL", "JAVA", "DEVELOPMENT" ],
    "name" : "Endava presentation",
    "approvedBy" : "juan.perez@endava.com",
    "description" : "Read the PPT with the welcome to Endava information.",
    "files" : [ {
      "name" : "myFile.txt",
      "link" : "http://documentserver/docs/5aea3961-a858-45ce-95cf-2b0f929dde93",
      "doc-id" : "5aea3961-a858-45ce-95cf-2b0f929dde93"
    }, {
      "name" : "myFile.txt",
      "link" : "http://documentserver/docs/5aea3961-a858-45ce-95cf-2b0f929dde93",
      "doc-id" : "5aea3961-a858-45ce-95cf-2b0f929dde93"
    } ],
    "id" : "5aea3961-a858-45ce-95cf-2b0f929dde93",
    "assignee" : "juan.perez@endava.com",
    "priority" : "High",
    "type" : "self-study",
    "taskDefinitionId" : "5aea3961-a858-45ce-95cf-2b0f929dde93",
    "status" : "IN-PROGRESS"
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
 * Updates the status of a ramp-up process.
 * Allows to change the status of the specified ramp-up process.
 *
 * id String Ramp up process Id
 * body Body Object that contains the target status of the identified ramp-up processs.
 * no response value expected for this operation
 **/
exports.rampupsIdStatusPOST = function(id,body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Adds a list of tasks to the ramp-up process
 * Allows to assign a list of tasks to the specified ramp up process
 *
 * id String Ramp up process Id
 * body List List of tasks that should be included in the ramp up process. (optional)
 * returns List
 **/
exports.rampupsIdTasksPOST = function(id,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id" : "5aea3961-a858-45ce-95cf-2b0f929dde93"
}, {
  "id" : "5aea3961-a858-45ce-95cf-2b0f929dde93"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Return the details of the specified task
 * Return an object with all the details of the task identified with the id sent in the path parameter. 
 *
 * id String Id of the ramp-up process that has the desired task.
 * taskId String Id of the desired task
 * returns Task
 **/
exports.rampupsIdTasksTask_idGET = function(id,taskId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "assignedBy" : "juan.perez@endava.com",
  "audience" : [ "GENERAL", "JAVA", "DEVELOPMENT" ],
  "name" : "Endava presentation",
  "approvedBy" : "juan.perez@endava.com",
  "description" : "Read the PPT with the welcome to Endava information.",
  "files" : [ {
    "name" : "myFile.txt",
    "link" : "http://documentserver/docs/5aea3961-a858-45ce-95cf-2b0f929dde93",
    "doc-id" : "5aea3961-a858-45ce-95cf-2b0f929dde93"
  }, {
    "name" : "myFile.txt",
    "link" : "http://documentserver/docs/5aea3961-a858-45ce-95cf-2b0f929dde93",
    "doc-id" : "5aea3961-a858-45ce-95cf-2b0f929dde93"
  } ],
  "id" : "5aea3961-a858-45ce-95cf-2b0f929dde93",
  "assignee" : "juan.perez@endava.com",
  "priority" : "High",
  "type" : "self-study",
  "taskDefinitionId" : "5aea3961-a858-45ce-95cf-2b0f929dde93",
  "status" : "IN-PROGRESS"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Updates the status of a ramp-up process.
 * Allows to change the status of the specified ramp-up process.
 *
 * id String Ramp up process Id
 * taskId String Task Id
 * body Body_1 Object that contains the target status of the identified ramp-up task.
 * no response value expected for this operation
 **/
exports.rampupsIdTasksTask_idStatusPOST = function(id,taskId,body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Creates a ramp up process for a joiner
 * This operation allows the creation of a new ramp-up process and associate it to a joiner
 *
 * body RampUp RampUp object that contains the requiered information to create a ramp-up process
 * returns Id
 **/
exports.rampupsPOST = function(body) {
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

