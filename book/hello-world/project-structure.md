---
sidebar_position: 2
---

# Project Structure

Lets have a look at the project structure that `create-react-app` just created for us. If you take a look at the folders inside `hello-react`, you should see something like this:

```shell
hello-react
|--- src
|    |--- App.css
|    |--- App.js
|    |--- App.test.js
|    |--- index.js
|    |--- logo.svg
|    |--- serviceWorker.js
|    |--- setupTests.js
|--- public
|    |--- index.html
|    |--- favicon.ico
|    |--- logo192.png
|    |--- logo512.png
|    |--- manifest.json
|    |--- robots.txt
|--- node_modules
|--- package.json
|--- yarn.lock
|--- README.md
```

lets talk a little about the folders and files there:

- **src:** This is where our source code lives. We will create all our javascript files there, together with CSS and images. We will go into more details about each existing file inside `src` in a moment.
- **public:** This is where all the publicly available assets should be. Those files are statically rendered, which means that React just consume them "as-is" most of the time and expose them to the public. With the exception of `index.html` where our build system also injects some code and replace some existing snippets.
  - **index.html**: This is the most important file in this folder. That is where all begins. Like all websites, the browser needs a HTML file to start rendering something, loading javascript and css files. our React app has only one HTML file, which is the `index.html`. That is the reason those apps are called **Single Page Apps (SPA)**. React uses a single DOM element in the tree to mount the whole application. You might think that is very inefficient, but the [React reconciliation algorithm](https://reactjs.org/docs/reconciliation.html) is quite clever in optimizing which elements should render and update at any given point in time.
- **node_modules**: This is where all our dependencies live. All the libraries we use, including React itself, has its own folder in there and are made available to use during development and build time. We can import all libraries from there and use anywhere in our `src` folder.
- **package.json**: This is just a plain JSON file where we declare our app metadata and all dependencies we need to run our app. If you take a look at `package.json` you can see that it is very declarative. all the keys have a well defined name and must be used according to the [npm-package.json spec](https://docs.npmjs.com/files/package.json). We will install more libraries later on and you will see what needs to change there.
- **yarn.lock**: This is the file that controls which dependencies are installed, which versions and so on. We should never ever edit this file manually. Let it be. [Yarn](https://yarnpkg.com/lang/en/) is a dependency management alternative to [npm](https://www.npmjs.com/) and they can be used interchangeably.
- **README.md**: This is where the documentation of our project should be. `create-react-app` already wrote some stuff for us there about how to start the app for development and so on, but we will update it with our own content later.

## index.html: Where it all begins

Lets take a look at the content of `index.html` and understand what is going on there.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. 
      See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <!--
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    -->
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
    -->
  </body>
</html>
```

As you can see, this is just a simple HTML file. There is nothing special about it. But if you read the comments, already provided by `create-react-app`, you can notice three things.

1. **%PUBLIC_URL%**: This is a template variable that will be replaced during build time with the absolute path of the `public`. This will ensure that all your assets can be served, independently of client-side routing.
2. **div with id="root"**: This is the Application mounting point. Our React code will look for this div to mount the entire application within it. We will see the javascript code for that shortly.
3. **There is no javascript tags**: As you can see, the `index.html` file doesn't contain any javascript tags or imports of any kind. The javascript tags will be injected at build time by `create-react-app`, so you don't have to think too much about it by default.
