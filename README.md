# Angular Auto Kit

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

**The Angular Auto Kit features**
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
|-- static
    |-- css
        |-- style.css
```

Package.json is only used by NPM to load and update project dependencies. You can edit this file to add your own dependencies and enjoy the power of node package manager.

Index.html is the main skeleton of your web application. You can add some stylesheets in the head or change the layout. In this file, there are some content which must stay intact :
* The tag which contain the directive who load the current controller view (`<div data-ng-view></div>`)
* The third party scripts and requirejs script tag. Those scripts initialize AngularJS and its modules. Only add scripts here if it's an angular official module (like ngRoute). To add a non-official angular plugin, refer to the part *Get started > Customize*.

--------

## Get started

### Install


### Deploy


### Run


### Customize

#### Route provider
#### Controller
#### View
#### Service
#### Directive

--------

## Samples

* [Bootstrap UI](#)

More samples coming soon.
