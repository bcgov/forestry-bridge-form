# Forester-Job-Placement Order Form

__This is a fork version for [Family-Protection-Order]( https://github.com/bcgov/Family-Protection-Order )__
__Many of the originating features have been stripped or commented out. The database has been disconnected. As a maintainer of this project you should periodically refer to the originating fork to see if there are changes that you may want to include into this repository.__

## Structure

## Dev environment
Currently it needs npm 5.8, node 9.4, e2s installed. 
running on Docker is recommended

### Client Application (fpo-web)
An AngularJS client application which serves out the SurveyJS based questionnaire.

###	REST API (fpo-api)
A Django based REST API which provides the heavy lifting.  The API includes a Swagger interface containing API documentation and UI that allows you to interact with the various APIs manually.

### PDF Microservice (fpo-pdf)
An html to PDF microservice used to generate reports.

###	Database (fpo-db)
A PostgreSQL database for storage, complete with a SchemaSpy instance for documentation.

## Development Instances

Development instances of the application can be found here;
* Client Application - https://lclymn-dev.pathfinder.gov.bc.ca/
* REST API - https://django-lclymn-dev.pathfinder.gov.bc.ca/api/v1/
* SchemaSpy Database Documentation - http://schema-spy-schema-spy-lclymn-dev.pathfinder.gov.bc.ca/

## Running on OpenShift

To deploy using a local instance of OpenShift, refer to [Running on OpenShift](./RunningOnOpenShift.md).  These instructions, apart from the steps that are specific to setting up your local environment, can be used to get the project deployed to a production OpenShift environment.

## Running on Docker

The project can also be run locally using Docker and Docker Compose.  Refer to [Running with Docker Compose](./docker/README.md) for instructions.

> Please note you must be connected to a government network to leverage local testing of emails

## Code of Conduct

Please refer to the [Code of Conduct](./CODE_OF_CONDUCT.md) 

## Contributing

For information on how to contribute, refer to [Contributing](CONTRIBUTING.md)

## License

Code released under the [Apache License, Version 2.0](./LICENSE).
