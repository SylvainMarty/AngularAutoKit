# Angular MVC Starter Kit

A simple AngularJS Starter Kit which automatically loads MVC's dependencies.


## Table of content

1. [Overview](#overview)
2. [Get started](#get-started)
	* [Install](#install)
	* [Deploy](#deploy)
	* [Run](#run)
3. [Customize](#customize)
	* [Habits](#habits)
	* [Route provider](#route-provider)
	* [Controller](#controller)
	* [View](#view)
	* [Services, directives, factories, filters](#services-directives-factories-filters)
4. [Samples](#samples)
5. [Issues and contributing](#issues-and-contributing)


## Overview

First of all, this whole repository is based on [DanWahlin/CustomerManager](https://github.com/DanWahlin/CustomerManager) code. I found his repository very interesting but a little messy. I wanted source code that I could re-use easy as possible for building frontend applications with AngularJS.

This repository provides a simple AngularJS application structure which can be used to start a new project. I'll hope it'll help you like it helps me right know. I will enhance the features in the future. Feel free to contribute !

**The Angular MVC Starter Kit features**
* **Ready-to-use** AngularJS MVC application
* **Dynamic dependencies injection** : create JS controller and HTML view, that's all you need to do
* **Ready-to-extend structure** : Create services, factories and directives for AngularJS

### Requirements

* AngularJS 1.5.* (v2 not supported)
* ngRoute 1.5.* (v2 not supported)
* RequireJS 2.*
* [npm (Node Package Manager)](https://nodejs.org/en/download/)
* a web server (Apache2, Nginx, node http-server, etc.)

*Note : this project does not work without an HTTP server. You can try to launch the index.html with your browser but it risks to throw a cross plateform origin error.*

### Project structure

```
|-- package.json
|-- index.html
|-- main.js
|-- app
|   |-- app.js
|   |-- config.js
|   |-- routes.js
|   |-- controllers
|   |   |-- helloController.js
|   |-- directives
|   |-- factories
|   |-- filters
|   |-- services
|   |   |-- properties.js
|   |   |-- routeResolver.js
|   |-- views
|       |-- hello.html
|-- static
    |-- css
        |-- style.css
```

`package.json` is only used by NPM to load and update project dependencies. You can edit this file to add your own dependencies and enjoy the power of node package manager.

`index.html` is the main skeleton of your web application. You can add some stylesheets in the head or change the layout. In this file, there are some content which must stay intact :
* The tag which contain the directive which load the current controller view (`<div data-ng-view></div>`)
* The third party scripts and RequireJS script tag. Those scripts initialize AngularJS and RequireJS. Don't add scripts or stylesheets here, use main.js.

`main.js` contain all stylesheets and JS scripts needed by your app. If you need to add libraries like bootstrap or other angular module, just add it to the list. I wrote comments to help you into the file.

`node_modules` will contain all the project dependencies. When you download or clone this repository, this folder doesn't exist. Just keep going to the part *Get started > Install*.

The `static` contains stylesheets, pictures, fonts and whatever static stuff you'll need.

The `app` folder contains **all the web app project files**. In this folder. There is 3 important files at the root :
* `app.js` : the declaration of the app and the angular modules declaration (like `ngRoute`, `ngResource`, etc.).
* `config.js` : the dynamic loading configuration file. Just don't touch it. Seriously.
* `routes.js` : the routes of the applications (`/home`, `/users` or whatever you want).


## Get started

### Install
Clone or download this repository. Then, you will need [NPM (Node Package Manager)](https://nodejs.org/en/download/) to get the dependencies. If you have never used this software, don't be afraid, he's a friend.

### Deploy
Go to the project root directory and, with *npm*, just type `npm install`. What's going there ? The package manager downloading all the project dependencies like AngularJS, RequireJS, etc.

### Run
Like I said before, this project needs an HTTP server. I recommend the node module `http-server` for local tests. It's very simple to use, just type those commands in your terminal (works on Windows, Linux and OSX) :

```sh
npm install http-server -g
http-server -c-1 -p 9000
```

We just tell npm to install the module `http-server` on the computer, not only in the directory.
Then, we just use the soft to start on a web server on the port 9000. You can choose an other port if it's already taken.

Then, just go to your favorite browser and go to  [http://localhost:9000](http://localhost:9000).

### Customize
The first thing I want when I use a external source code to start a project, it's to rename the AngularJS app name (`ng-app`). With AngularJS MVC Starter Kit, you can change this by changing the `webApp` word by whatever you want.

Just go to the two files `main.js` and `app/app.js` and replace `webApp`. You can do a search and replace `webApp` recursively with the text editor of your choice too.

#### Habits
For all the project files which need to be loaded dynamically, their code need to start like this :

```js
'use strict';

define(['app'], function (app) {

	// app is the angular application variable
	// which can be used to register components

	// file stuff...

});
```

#### Route provider
An MVC based web app always contains routes. Routes are the "path" which can be accessed by users to do some stuff. For each stuff, there is a *route* which refers to a *view* and a *controller*.

Add a route in `app/routes.js` :
```js
$routeProvider
	.when('/hello', route.resolve('hello', '/', 'ctrl'))
	.otherwise({ redirectTo: '/hello' });
```

**Explanation :**
```js
.when('/path/to/stuff', // web route
	route.resolve(
		'stuff', 	// view/controller prefix (the view file name is stuff.html, the controller file name is stuffController.js)
		'/',		// Path to the view/controller files (give you the choice to tidy files)
		'stuffCtrl' // The alias of the controller which can be used in the stuff.html to play with angularJS data binding
	)
)
```

The `otherwise` redirects to a known route if the asked route doesn't exist.

#### Controller
Controllers are loaded dynamically. To do that, the controller need to be registered with `app.register.controller(...)`. It's like the AngularJS method `angular.module('webApp').controller(...)` but the object `app.register` loads asynchronously the controller code.

The minimal controller code :
```js
'use strict';

define(['app'], function (app) {

    /**
     * stuffController
     */
    app.register.controller('stuffController', ['$scope',
    function ($scope) {

        var vm = this;
		// The 'vm' object is accessible in the view via
		// the controller alias defined in the Route provider
		vm.stuff = "doStuff"
    }]);

});
```

#### View
View are the easiest part of the app. Just create the `stuff.html` and code.
You can access to the controller method with the alias :

```html
<h1>{{stuffCtrl.stuff}}</h1> <!-- display 'doStuff' -->
```

Views must be wrote in the routes.js (see [Get Started > Controller](#controller)).

#### Services, directives, factories, filters
For the moment, I haven't find the best way to load dynamically all AngularJS components. So, in order to install the components listed in the title, you need to do this : add the path to the component in the `main.js` (relative to the `app` folder). That's all.

To use it, just call its name in the parameter of your controller / other component.

##### Example :
**1) Component creation** (tidied in `app/directives/doStuff.js`)

```js
'use strict';

define(['app'], function (app) {

    /**
     * Directive
     * do-stuff
     *
     * use : <do-stuff two-way-binding="object"></do-stuff>
     */
    app.directive('doStuff', ['$timeout',
    function ($timeout) {

		var link = function($scope, $element) {
			console.log("do-stuff directive", $scope, $element);
		}

		return {
            restrict: 'E',
            scope: {
                twoWayBinding: '='
            },
            link: link
        };

    }]);

});
```
**2) Register the component into `main.js`**

```js
require(
    [
        // Stylesheets (begin by css!/)
        'css!/static/css/style.css',

        // JavaScript (add .js if files are in node_modules)
        'app',
        'config',
        'routes',
        'services/routeResolver',
        'services/properties',
        'node_modules/angular-route/angular-route.min.js',

        // Add your angular components here
        'directives/doStuff'
    ],
    function () {
        angular.bootstrap(document, ['webApp']);
    }
);

```


## Samples

* [Bootstrap UI](https://github.com/SylvainMarty/AngularMVCStarterKit/tree/sample-bootstrap-ui)
* [API service](https://github.com/SylvainMarty/AngularMVCStarterKit/tree/sample-api-service)

More samples are coming (I hope they're coming).


## Issues and contributing

To contribute, please make sure to checkout your branch based on `dev` before working. I will appreciate all your feedbacks and contributions.

for any request, bug or contribution, please open an issue, I will answer you as soon as possible.
