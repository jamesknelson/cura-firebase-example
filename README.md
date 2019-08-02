# Create (Universal) React App / Firebase

This repository demos a React app with serverless SSR using [CURA](https://github.com/frontarm/create-universal-react-app), [Firebase](http://firebase.google.com), [react-helmet-async](https://www.npmjs.com/package/react-helmet-async), [Styled Components](https://styled-components.com) and [Navi](https://frontarm.com/navi/).

If you'd like to learn more about this stack, check out my [React, Firebase & Bacon](https://frontarm.com/bacon/) course on Frontend Armory, where I'm documenting the construction of a real-world app called [vouch.chat](https://vouch.chat). Join in to get immediate access to the app's full source code -- with authentication, animation, payments, and everything else you'd expect from a serious app.


Getting Started
---------------

Trying CURA out and deploying your own site with Serverless SSR is as simple as 1-2-3! Once you've [created a Firebase App](https://console.firebase.google.com) and installed the [Firebase CLI tool](https://firebase.google.com/docs/cli):


### 1. Clone the repo and start the dev server

Start by cloning this repository and installing the dependencies:

```bash
git clone git@github.com:jamesknelson/cura-firebase-example.git myapp
cd myapp
npm install
```

Then start the dev server to test that it works:

```bash
npm start
```

This should open a browser window to <http://localhost:3000/>, which should display the landing page. If you view source, you'll see that the page has been server rendered. 


### 2. Link a firebase app

The Firebase CLI tool looks for the current project's app ID in a file could `.firebaserc` -- which you'll need to create. The easiest way to do this is by running `firebase use --add`, selecting a project, and then naming it `default` when prompted:

```
$ firebase use --add

? Which project do you want to add? myapp
? What alias do you want to use for this project? (e.g. staging) default

Created alias default for myapp.
Now using alias default (myapp)
```

You'll also need to install the functions dependencies:

```bash
cd functions
npm install
cd ..
```


### 3. Deploy!

Deploying your app to the internets is simple:

```bash
# This can take quite a bit of time
npm run deploy
```

This will build your app's distributable files with `universal-react-scripts`, then deploy these to Firebase Hosting -- along with your server renderer function. Once complete, your new app's URL will be printed to the console.

If everything is set up correctly, you should be able to navigate to your new app's URL, view the source, and then bask in the glory of your creation!


Learn more
----------

Want to learn more about creating apps with Firebase, Create React App and Styled Components? Check out [React, Firebase & Bacon &raquo;](https://frontarm.com/bacon/)


License
-------

MIT