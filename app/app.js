'use strict';

define(['services/routeResolver'], function () {

    var app = angular.module('webApp',
        [
            'ngRoute',
            'routeResolverServices'
        ]);

    return app;

});
