(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name topshelf.core.controller:NavbarCtrl
   *
   * @description
   *
   */


  function NavbarCtrl(Auth) {
    var vm = this;

    vm.Auth = Auth;
  }

  angular
    .module('topshelf.core')
    .controller('NavbarCtrl', NavbarCtrl);
})();