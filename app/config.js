'use strict';

define(['app'], function (app) {

    app.config(['$routeProvider', 'routeResolverProvider', '$controllerProvider',
                '$compileProvider', '$filterProvider', '$provide',

        function ($routeProvider, routeResolverProvider, $controllerProvider,
                  $compileProvider, $filterProvider, $provide) {

            app.register =
            {
                controller: $controllerProvider.register,
                directive: $compileProvider.directive,
                filter: $filterProvider.register,
                factory: $provide.factory,
                service: $provide.service
            };

    }]);

});
