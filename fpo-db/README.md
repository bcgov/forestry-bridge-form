# Forester-Job-Placement Order DB

## Overview

Forester-Job-Placement Order database is not leveraged at this time, this component is based off of the Family Protection Order repo as a fork

## Development

The DB component is an instance of Postgres. The schema and data loading is all handled by Forester-Job-Placement Order API, and the Postgres image being used is an unchanged Red Hat image. As such, there is no build or database initialization associated with the DB - just the Deployment.

## Development

To deploy Forester-Job-Placement Order on an instance of OpenShift, see [the instructions](../RunningLocal.md) in the file RunningLocal.md.