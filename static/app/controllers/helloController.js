'use strict';

define(['app'], function (app) {
    

    /**
     * HelloController
     * Just say a little Hello to the world
     */
    app.register.controller('helloController', ['$scope', 
    function ($scope) {

        var vm = this;

        vm.title;
        $scope.subTitle;

        function init() {
            vm.title = "Titre via le controller";
            $scope.subTitle = "Sous-titre via scope";
        }

        init();
    }]);

});