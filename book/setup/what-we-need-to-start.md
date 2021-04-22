---
sidebar_position: 1
---

# What do we need to start?

To start things off, I need you to have a basic understand of the following topics, including links to free books and resources you can access online if you need to get up to speed:

- [Basic knowledge of HTML](https://www.learnenough.com/html-tutorial/html_intro)
- [Basic knowledge of Javascript](https://www.learnenough.com/javascript-tutorial/hello_world)
- [Basic knowledge of git](https://www.learnenough.com/git-tutorial/getting_started)
- [Basic understanding about AJAX](https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX)
- [Executing basic commands on your terminal](https://www.learnenough.com/command-line-tutorial/basics)

During the course of the book, we will brush up some of those concepts, so don't feel stressed out if you don't have an advanced understanding on how all those things work. If you ever created a website in HTML with some Javascript, you should be good to go. In any case, you should be able to follow along and pick up some concepts along the way.

## Dependencies

To start developing the Reactgram app, you need to have a few applications installed on your machine. They are all open source and free to install and use.

### node

To develop React apps, we need a tool called [node](https://nodejs.org/en/). Node is a Javascript runtime that runs directly on your machine instead of running only on the browser. node opened the door for many cool applications, but the biggest one in my point of view was to enable developers to build apps using one single programming language: **Javascript.**  

With node, you can build your backend, which gives you access to server-side capabilities like database access, file system and many other features that are only available outside of the browser sandbox. But remember that the web browser only understands Javascript, so if you are a Frontend Developer, you will be able to understand and write backend code using `js` files.  

There is also another benefit when using a single programming language on the backend and frontend: Your development team now have single idiom to speak, so communication and collaboration can benefit greatly.

### create-react-app

Another tool we need under our belt is [create-react-app](https://github.com/facebook/create-react-app). This is a node library that helps us to bootstrap our React project. It creates all the necessary files, folders and highly optimized configuration to run our app in `development` mode and also in `production`.  
  
Before `create-react-app` was a thing, a ton of configuration and boilerplate code you would have to write to start a React project. It used to take me a few days to find out the right configuration for [Webpack](https://webpack.js.org/) to run and bundle the app for production properly. It was a pain.  
  
On the other hand, `create-rect-app` removes all the painful configuration to get a super optimized setup. It comes out-of-the-box. During the development of the project we will build together on this book, which is a fairly big project, I didn't need to change anything for the application to properly run and bundle for production. it is ready to deploy from the moment we create our app.  

### Docker

To be able to post pictures, follow friends and give likes on our **Reactgram** app, we need a backend to store all this data. This is where [Docker](https://www.docker.com/resources/what-container) comes in handy. It is a virtualization tool that helps us to get a service up and running fairly quickly, without having to worry about dependencies.  
  
Explaining how Docker works is out of the scope of this book, but all you need to know is that you have to have Docker installed. We will execute just a few simple commands to have our backend ready to be used by our React app. Docker runs a container, which you can see it as a minimal OS running with all our dependencies like the Postgres Database, Backend application and File Storage.

### Use the Text Editor of your choice

I personally like to use [Visual Studio Code](https://code.visualstudio.com/), but feel free to use whatever editor you like. If you are used to [vim](https://www.vim.org/), [emacs](https://www.gnu.org/software/emacs/), [nano](https://www.nano-editor.org/), [atom](https://atom.io/) or [sublime](https://www.sublimetext.com/), it is up to you. As long as you can write javascript code, you should be good to go.

[comment]: (TODO: Include a section for reporting errors and suggestions)  

## Moving on  

In the next steps, we will install all those dependencies mentioned above and get them up & running to create our **Reactgram** app.  
To make things a little easier for you, I will also add a link to the commit of all changes we make along the way, so you can see all the file changes we made together during the following chapters.
