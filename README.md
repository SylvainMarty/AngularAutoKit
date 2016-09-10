# Angular MVC Starter Kit

A simple AngularJS Starter Kit which automatically loads MVC's dependencies.

--------

## Table of content

1. [Overview](#)
2. [Get started](#)
	* [Install](#)
	* [Deploy](#)
	* [Run](#)
3. [Customize](#)
4. [Samples](#)
5. [Contributions](#)

--------

## Overview

First of all, this whole repository is based on [DanWahlin/CustomerManager](https://github.com/DanWahlin/CustomerManager) code. I found his repository very interesting but a little messy. I wanted source code that I could re-use easily as possible for building frontend applications with AngularJS.

This repository provide a simple AngularJS application structure which can be use to start a new project. I'll hope it'll help you like it help me right know. I will enhance the features in the future. Feel free to contribute !

**The Angular MVC Starter Kit features**
* **Ready-to-use** AngularJS MVC application
* **Dynamic dependencies injection** : create JS controller and html view, that's all you need to do
* **Ready-to-extend structure** : Create services, factories and directives for AngularJS

### Requirements

* AngularJS 1.5.* (v2 not supported)
* ngRoute 1.5.* (v2 not supported)
* RequireJS 2.*
* npm (Node Package Manager)
* a web server (Apache2, Nginx, node http-server, etc.)

*Note : this project does not work without an HTTP server. You can try to launch the index.html with your browser but it risks to throw a cross plateform origin error.*

### Project structure

```
|-- package.json
|-- index.html
|-- main.js
|-- app
|   |-- app.js
|   |-- controllers
|   |   |-- helloController.js
|   |-- directives
|   |-- services
|   |   |-- authService.js
|   |   |-- config.js
|   |   |-- routeResolver.js
|   |-- views
|       |-- hello.html
|-- node_modules
|-- static
    |-- css
        |-- style.css
```

`package.json` is only used by NPM to load and update project dependencies. You can edit this file to add your own dependencies and enjoy the power of node package manager.

`index.html` is the main skeleton of your web application. You can add some stylesheets in the head or change the layout. In this file, there are some content which must stay intact :
* The tag which contain the directive who load the current controller view (`<div data-ng-view></div>`)
* The third party scripts and requirejs script tag. Those scripts initialize AngularJS and its modules. Only add scripts here if it's an angular official module (like ngRoute). To add a non-official angular plugin, refer to the part *Get started > Customize*.

The `app` folder contain all the web app project files.

`node_modules` will contain all the project dependencies. When you download or clone this repository, this folder doesn't exist. Just keep going to the part *Get started > Install*.

The `static` mean stylesheets, pictures, fonts and whatever static stuff.

--------

## Get started

### Install
Clone or download this repository. Then, you will need [NPM (Node Package Manager)](https://nodejs.org/en/download/) to get the dependencies. If you have never used this software, don't be afraid, he's a friend.

### Deploy
Go to the project root directory and, with *npm*, just type `npm install`. What's going there ? The package manager downloading all the project dependencies like AngularJS, RequireJS, etc.

### Run
Like I said before, this project need an HTTP server. I recommend the node module `http-server` for local tests. It's very simple to use. Just type those commands in your terminal (works on Windows, Linux and OSX).

```sh
npm install http-server -g
http-server -p 9000
```

We just tell npm to install the module `http-server` on the computer, not only in the directory.
Then, we just use the soft to start on a web server on the port 9000. You can choose an other port if it's already taken.

### Customize
The first thing I want when I use a external source code to start a project, it's to rename the AngularJS app name (`ng-app`). With AngularJS MVC Starter Kit, you can change this by changing the `webApp` word by whatever you want.

Just go to the two files `main.js` and `app/app.js` and replace `webApp`. You can do a search and replace `webApp` recursively too with the text editor of your choice.

#### Conventions
For all the project files which need to be load dynamically, their code need to start like this :

```js
'use strict';

define(['app'], function (app) {

	// app is the angular application variable
	// which can be used to register components

	// file stuff...

});
```

#### Route provider
A MVC based web app always contain routes. Routes are the "path" which can be accessible by users to do some stuff. For each stuff, there is a *route* which refer to a *view* and a *controller*.

To add a route, just go to the `app/app.js`, to the line :
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

The `otherwise` redirect to a known route if the asked route doesn't exist.

#### Controller
Controller are loaded dynamically. To do that, the controller need to be registered with `app.register.controller(...)`. It's like the AngularJS method `angular.module('webApp').controller(...)` but the object `app.register` load asynchronously the controller code.

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

#### Services, directives, factories, filters
Like the controller, those components can be loaded dynamically by the project. Just register them with the object `app.register`.

**Example :**
```js
'use strict';

define(['app'], function (app) {

    /**
     * Directive
     * do-stuff
     *
     * use : <do-stuff two-way-binding="object"></do-stuff>
     */
    app.register.directive('doStuff', ['$timeout',
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

--------

## Samples

* [Bootstrap UI](#)

More samples coming soon.
