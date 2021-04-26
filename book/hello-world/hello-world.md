---
sidebar_position: 1
---

# Hello World in React

In this chapter, we will create a very simple React app just to show you around how a React project created with `create-react-app` looks like. We will see a few core concepts and how to apply them.

## Creating a React project

assuming you have [all the dependencies installed](./what-do-we-need-to-start.md), lets go ahead to our terminal and create our first React app:

```shell
# This command will tell NPM to download the create-react-app
# and use NPX to execute it directly.
# the name of the app will be hello-react.
npx create-react-app hello-react
```

When this process is done, we end up having a new folder called `hello-react`. Lets go inside that folder and start our development server, which is already provided by `create-react-app`

```shell
# go to the newly created project folder
cd hello-react
# start out the development server
yarn start
```

If you open your browser and go to `localhost:3000` you should see the following screen:

![Hello World React](/img/hello-world-screen.png)

Congratulations! You just created your first React app! How awesome is that? 😁  
Ok, you didn't write any code yet, so it might not be as exciting as it sounds, but `create-react-app` just wrote a bunch of code for you that is necessary to kick things off. All the code that must be there from the beginning for things to work properly. Think about it as the foundation of the house we need to build. A lot of work that is repetitive, but necessary in all projects.  
  
Lets dive into the [files we just created](./project-structure.md) and see why they are vital for our little hello-world app.