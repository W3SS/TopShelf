(function() {
    'use strict';

    /**
     * @ngdoc controller
     * @name HomeCtrl as vm
     * @description Controller for the home page
     *
     */

    angular
        .module('app.core.states')
        .controller('HomeCtrl', HomeCtrl);

    HomeCtrl.$inject = ['Post', '$scope', '$location'];
    /* @ngInject */
    function HomeCtrl(Post, $scope, $location) {
        var vm = this;
        vm.posts = {};
        vm.processing = true;

        Post.all().success(function(data) {
            // when all the posts come back, remove the processing variable
            vm.processing = false;
            // bind the posts that come back to vm.posts
            vm.posts = data;
        }).error(function(error) {
            vm.status = 'Unable to Retrieve Posts: ' + error.message;
        });

        vm.viewMore = function(post) {
            $location.path('/view-post/' + post._id);
        };
    }
})();
