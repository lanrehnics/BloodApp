# BloodApp

## How to set up development environment
1. Make sure Nodejs(5.x Recommended) is installed
2. Install ionic 2, cordova and typings globally ```npm install -g ionic@beta cordova typings```
3. Clone repository and navigate inside it
4. Install npm dependencies ```npm install```
5. Install Typings ```typings install```
6. Install Cordova plugins ```ionic state restore```

## Recommended programs for development
* [Atom](https://atom.io)
  * Recommended Atom plugins
    * [atom-typescript](https://atom.io/packages/atom-typescript)
* [Github Desktop](https://desktop.github.com)
* [Google Chrome](https://www.google.com/chrome/browser/desktop/index.html)
  * While viewing the app in Chrome use the dev tools(Ctrl or ⌘ + Shift + C) to see errors in the console and to view the app in different screen sizes(Ctrl or ⌘ + Shift + M)

## How to view the app while developing
1. Serve the app with the Ionic CLI ```ionic serve```
2. Go to \<YOUR-LOCAL-IP\>:8100 in a browser and view the app and do Ctrl or ⌘ + Shift + C and Ctrl or ⌘ + Shift + M to view the app in different screen sizes 

## How to build the app for Android Locally
TODO

## (CURRENTLY DISABLED) How to build the app for Android on Travis CI
1. Commit to the repository
2. Download the build from [the releases page](https://github.com/logikt/QuizApp/releases) after 5-10 minutes
3. If you don't want the app to be built add ```[ci skip]``` to the commit message (Please do this when your commit does not change the source of the app (e.g. changes to the README) as we only have 100 builds a month)

## (NOT UP TO DATE) How to view the app from the web
* To view the tabs version of the app (the version in the master branch) click [here](https://ionicbloodapptabs.firebaseapp.com)
* To view the drawer version of the app (the version in the drawer branch) click [here](https://ionicbloodappdrawer.firebaseapp.com)

## How to build and deploy the app to the web
1. Build the app for the browser platform ```ionic build browser```
2. Install the Firebase CLI ```npm install -g firebase-tools```
3. Login to the Firebase CLI ```firebase login``` (to deploy the app to Firebase you will need a Google Account with access to the Firebase projects IonicBloodAppTabs and IonicBloodAppDrawer)
4. Deploy to Firebase Hosting ```firebase deploy```

## Other Info
* [Ionic 2 Documentation](http://ionicframework.com/docs/v2/)
