---
sidebar_position: 3
---

# Installing Docker

Lets have a look at how to install Docker on your system.

## Installing Docker on Mac and Windows

Go to the [Docker For Windows download page](https://docs.docker.com/docker-for-windows/install/) or [Docker for Mac download page](https://docs.docker.com/docker-for-mac/) and download the installation package. On this page, you will see all the steps to install and start Docker.  
When you get the installation done, go to your terminal on Mac or PowerShell on Windows and check your Docker version:

```shell
docker -v
# you should see something like this:
Docker version 19.03.5, build 633a0ea
```

## Installing Docker on Linux

Your linux version must probably already come with Docker installed. You should first check if Docker is there and which version you are running on your console:

```shell
# Check docker version
docker -v
# you should see something like this:
Docker version 19.03.5, build 633a0ea
```

If Docker isn't installed, go to the [Docker for linux page](https://docs.docker.com/install/linux/docker-ce/ubuntu/) and follow the installation instructions. The link points you to Docker for Ubuntu, but on the left-hand side of the Docker page you can select your linux distribution and follow the installing steps.

## Installing docker-compose

`docker-compose` is a tool that helps us to combine docker containers in a declarative way. For our **Reactgram** backend we have 2 docker containers to run:

- REST API backend
- PostgreSQL Database

Those containers must be connected somehow and that is where docker-compose shines. It lets us declare how this connection between containers must happen and how those containers should be exposed to the network. We will see it action in the following chapters.  
  
docker-compose was automatically installed on Mac and Windows when you installed Docker Desktop. But for Linux, you must install it manually. Please, check the [docker-compose official installation guide](https://docs.docker.com/compose/install/) and follow the steps.