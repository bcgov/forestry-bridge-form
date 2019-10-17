# Forester Job Placement API

## Overview

The API currently does __not__ interface with the database now,database component is based off of the Family Protection Order repo.
The API is developed in Django/Python, using a Visual Studio 2017 project.

## Development

The API is developed in Django/Python

### Constants

Any constants can be found within `__init__.py`

## Development Deployment Environment

To deploy Forester-Job-Placement Order on an instance of OpenShift, see [the instructions](../RunningLocal.md) in the file RunningLocal.md.


## Database Migrations

Migrations are triggered automatically when the Django/Python container is deployed.  The process it triggered by wrapper code injected as part of the s2i-python-container build; https://github.com/sclorg/s2i-python-container/blob/master/3.6/s2i/bin/run

## ToDo:
- The auto-generated views are constructed using generics and a number of mixins.
  - Determine if there is a better way to do this.  Since it's not as clean as something constructed from ModelSerializer or HyperlinkedModelSerializer.
