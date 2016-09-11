require.config({
    baseUrl: '/app',
    urlArgs: 'v=1.0',
    map: {
        '*': {
            'css': 'node_modules/require-css/css.min.js' // or whatever the path to require-css is
        }
    }
});


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
        'node_modules/angular-route/angular-route.min.js'

        // Add your angular components here
    ],
    function () {
        angular.bootstrap(document, ['webApp']);
    }
);
