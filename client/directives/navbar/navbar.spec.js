'use strict';

describe('Directive: navbar', function () {

  beforeEach(module('oggApp'));
  beforeEach(module('app/directives/navbar/navbar.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should ...', inject(function ($compile) {
    element = angular.element('<navbar></navbar>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(1).toBe(1);
  }));
});
