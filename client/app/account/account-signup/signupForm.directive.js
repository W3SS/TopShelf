(function() {
    'use strict';

    /**
   * @ngdoc directive
   * @name account.directive:signupForm
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
     <example module="user">
       <file name="index.html">
        <account-signup-form></account-signup-form>
       </file>
     </example>
   *
   */
    /*jshint unused:false */

    angular
        .module('app.account.directives')
        .directive('signupForm', signupForm);

    function signupForm(Auth, $location, $window, toastr) {
        return {
            templateUrl: 'app/account/account-signup/signupForm.tpl.html',
            restrict: 'EA',
            link: function(scope, element, attrs) {
                scope.user = {};
                scope.errors = {};

                scope.register = function(form) {
                    scope.submitted = true;

                    if (form.$valid) {
                        Auth.createUser({
                            name: scope.user.name,
                            email: scope.user.email,
                            battletag: scope.user.battletag,
                            password: scope.user.password
                        })
                            .then(function() {
                                toastr.success('Sucessfully signed up', 'Welcome!');
                                // Account created, redirect to home
                                $location.path('/');
                            })
                            .catch(function(err) {
                                err = err.data;
                                scope.errors = {};

                                // Update validity of form fields that match the mongoose errors
                                angular.forEach(err.errors, function(error, field) {
                                    form[field].$setValidity('mongoose', false);
                                    scope.errors[field] = error.message;
                                });
                            });
                    }
                };

                scope.loginOauth = function(provider) {
                    $window.location.href = '/auth/' + provider;
                };
            }
        };
    }

})();