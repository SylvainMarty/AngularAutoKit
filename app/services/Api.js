'use strict';

define(['app'], function (app) {

    var Api = function($http){

        var vm = {},
            rootApi = 'http://jsonplaceholder.typicode.com';

        vm.setRootApi = function(newRootApi) {
            rootApi = newRootApi;
        }

        vm.getRootApi = function() {
            return rootApi;
        }

        vm.get = function(uri, options) {
            $http.get(parseUri(uri, options.map), options.params, options.config)
                 .then(options.callback);
        }

        vm.post = function(uri, options) {
           $http.post(parseUri(uri, options.map), options.params, options.config)
                .then(options.callback);
        }

        function parseUri(uri, mappings) {
            mappings = mappings !== undefined ? mappings : {};
            for(var mapping in mappings){
                uri = uri.replace("{"+mapping+"}", encodeURIComponent(mappings[mapping]));
            }
            if(uri.search('{') != -1) {
                throw "Missing uri mappings : " + uri;
            }
            return rootApi + uri;
        }

        return vm;

    };

    Api.$inject = ['$http'];
    app.factory('Api', Api);

});
