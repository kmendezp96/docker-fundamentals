# Ramp-Up Journal - API Documentation

## Summary

This repository stores the API documentation for the Ramp-Up Journal services and also stores the web application source code that allows seeing the documentation in a friendly way. 

## Documentation version

The last version of the documentation will be always present under the `master` branch. This includes both swagger definitions and the web application files.

## Documentation Web Application 

This application is based on the *SwaggerUI* interface and generated through the option `Generate Server - nodejs-server` from the *Swagger Editor* app using the file `rij-api.yml` that corresponds with the version that is to be published in the branch, so that, they reflect the same version.

### Running the application

To run the server, go to `api-server` folder and run:

```
# 1. Install node modules (Needed only the first time).
npm install 
# 2. Run the server
npm start
```


To view the Swagger UI interface:

```
open http://localhost:8080/docs
```
