(function () {
    'use strict';
    angular
    .module('app.admin')
    .controller('AdminDashboardCtrl', AdminDashboardCtrl);
    function AdminDashboardCtrl(Auth, $http, User) {
        var dash = this;
        dash.users = {};

    }

}());
