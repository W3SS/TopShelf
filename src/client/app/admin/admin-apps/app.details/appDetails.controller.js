(function () {
    'use strict';
    /**
       * @ngdoc object
       * @name admin.admin-recruitment.controller:ApplicationListCtrl
       *
       * @description
       *
       */
    angular
      .module('app.admin.states')
      .controller('ApplicationViewCtrl', ApplicationViewCtrl);
    /* @ngInject */
    function ApplicationViewCtrl($scope, $http, $stateParams,
      Application, $location) {
        var applicationId = $stateParams.id;
        var urlBase = 'https://us.api.battle.net/wow/character/';
        var jspcb = 'jsonp=JSON_CALLBACK';
        var apiKey = 'apikey=vw6jg8yxu7g9yws72tzrm58x286tr3xg';
        var loc = 'locale=en_US';
        var forumURL = 'https://topshelfguild.com/forums/api.php?';
        var xfKey = 'ce26ca980018d1c3e7925a473ed63c40';
        /*
             * @todo refactor into its own service
             * @todo fix character info retrieval
             */
        if (applicationId && applicationId.length > 0) {
            $http.get('/api/applications/' + applicationId)
            .success(function (application) {
                $scope.application = application;
                $http.jsonp(urlBase + application.charServer + '/' +
                  application.charName + '?fields=items%2C+progression' +
                  '&' + loc + '&' + jspcb + '&' + apiKey, {
                    headers: {'Accept-Encoding': 'gzip'}})
                .success(function (data, headers) {
                    $scope.charData = data;
                });
            });
        }
        $scope.saveApplication = function () {
            if (applicationId && applicationId.length > 0) {
                $http.put('/api/applications/' + applicationId,
                  $scope.application).success(function (application) {
                    $location.path('/admin/applications');
                });
            } else {
                $http.post('/api/pplications', $scope.application)
                .success(function (application) {
                    $location.path('/admin/applications');
                });
            }
        };

        $http.get('/api/applications').success(function (applications) {
            $scope.applicationList = applications;
        });
    }
}());
