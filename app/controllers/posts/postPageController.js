'use strict';

define(['app'], function (app) {


    /**
     * postPageController
     * Display the post page
     */
    app.register.controller('postPageController', ['$scope', '$routeParams', 'Api',
    function ($scope, $routeParams, Api) {

        var vm = this;
        vm.post = {};
        vm.author = {};
        vm.postId = $routeParams.post_id ;

        function init() {
            loadPost();
        }

        function loadPost() {
            Api.get('/posts/{post_id}', {
                params: {}, // optional
                config: {}, // optional
                map: { post_id: vm.postId },
                callback: function(response){
                    console.info("Post", response);
                    vm.post = response.data;
                    loadAuthor();
                }
            });
        }

        function loadAuthor() {
            Api.get('/users/{user_id}', {
                map: { user_id: vm.post.userId },
                callback: function(response){
                    console.info("Author", response);
                    vm.author = response.data;
                }
            });
        }

        init();
    }]);

});
