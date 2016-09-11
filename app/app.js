'use strict';

define(['services/routeResolver'], function () {

    var app = angular.module('webApp',
        [
            'ngRoute',
            'routeResolverServices',
            'ui.bootstrap'
        ]);

    return app;

});
