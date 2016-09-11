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
        'services/Api'
    ],
    function () {
        angular.bootstrap(document, ['webApp']);
    }
);
