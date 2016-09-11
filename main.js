require.config({
    baseUrl: '/app',
    urlArgs: 'v=1.0'
});

require(
    [
        // Add your angular components here
        'app',
        'config',
        'routes',
        'services/routeResolver',
        'services/properties',
        'node_modules/angular-ui-bootstrap/dist/ui-bootstrap.js' // Bootstrap UI lib
    ],
    function () {
        angular.bootstrap(document, ['webApp']);
    }
);
