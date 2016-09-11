require.config({
    baseUrl: '/app',
    urlArgs: 'v=1.0'
});

require(
    [
        'app',
        'config',
        'routes',
        'services/routeResolver',
        'services/properties'
    ],
    function () {
        angular.bootstrap(document, ['webApp']);
    }
);
