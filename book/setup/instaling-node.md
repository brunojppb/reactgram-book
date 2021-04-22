---
sidebar_position: 2
---

# Installing Node

Lets have a look at how to setup node on your development environment.

## Installing Node on Windows

Go to the [node Downloads page](https://nodejs.org/en/download/) and pick the right installation package. Just download it and install, like any other app you install on your computer. When the installation is complete, open your command prompt or PowerShell and type:

```shell
node -v
# as an output of this command, you should see something like this:
v14.6.0
# The version you installed might differ from the one shown above.
```

## Installing Node on Mac

If you have [homebrew](https://brew.sh/) installed, just open your terminal and type:

```shell
# Let's update homebrew first
brew update
# when the update is done, install node
brew install node
```

If you don't use homebrew, you can go to the [node Downloads page](https://nodejs.org/en/download/), download and install the `pkg` file. When the installation is done, check your node version on the terminal:

```shell
node -v
# as an output of this command, you should see something like this:
v14.6.0
# The version you installed might differ from the one shown above.
# That should not matter. I will try to keep this book up2date
```

## Installing Node on Linux

Depending on your linux version, the installing process might be different. Here we will install node on Ubuntu. If you are using a different distribution, the node website provides [installation alternatives.](https://nodejs.org/en/download/package-manager/)
  
Open up you terminal and type the following commands:

```shell
# make you have curl installed
sudo apt-get install curl
# lets add the node ppa
curl -sL https://deb.nodesource.com/setup_13.x | sudo -E bash -
# install node with sudo
sudo apt-get install nodejs
# lets check our node version
node -v
# as an output of this command, you should see something like this:
v14.6.0
# The version you installed might differ from the one shown above.
```

## npm

Now that we have node installed, we need a package manager to install javascript dependencies.  
If you come from the Ruby world, you have `gems`, if you come from the Java world, you have `Maven` to manage the dependencies for you. Using node is very similar. There is also a package manager that downloads and installs all the libraries you need on your project.  
This is called **NPM** which stands for `Node Package Manager` and it should come installed with node. Lets check which version of npm we currently have. On your terminal, type it in:

```shell
npm -v
# you should see something like
6.13.1
```