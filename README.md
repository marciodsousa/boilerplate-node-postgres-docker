# Boilerplate Docker + Node + PostgreSQL

## Contents

This project contains boilerplate code to quickly create a docker cluster with 2 containers:
- DB Container running PostgreSQL 13. This container is based in Alpine Linux for a lower resource consumption.
- API Container running Node in the latest LTS version. This container is based in Alpine Linux for a lower size, so Ubuntu/Debian specific commands might not be available.

## How to run

Mostly, things run inside docker. Therefore the only dependencies you actually need are Docker and Docker-Compose.

- `docker-compose up` -> Starts the environment. DB Container is started and API container is started too, installing any available dependencies before serving the index.js file (with hot-reload via `nodemon`).
- `docker-compose stop` -> Stops the containers. Data isn't lost.
- `docker-compose rm` -> Destroys all the containers. **Data is lost**.

## Connection Details to the DB

- Host: `db` or `localhost` if accessing from the host machine (imagine with a DB explorer)
- Port: `5432`
- User: `postgres`
- Password: `postgres`
- DB: `postgres`

Most of these details are defined as environment variables inside `.env` file. This file contents are propagated to both the API and the DB container.

## How to install new Node dependencies?

TL;DR: you should do it always inside the container to avoid conflicts between different OS versions of the installed dependencies.

First we need to connect a shell to the container:

`docker exec -it my-project-api /bin/sh`

and then we can run node commands as usual

`npm install <insert-dependency-name>`