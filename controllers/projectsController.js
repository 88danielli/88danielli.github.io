var app = angular.module('app');

app.controller('projectsController', function($scope) {
  console.log('Projects Controller Loaded');

  $scope.oneAtATime = true;

  $scope.status = {
    isCustomHeaderOpen: false,
    isFirstOpen: false,
    isFirstDisabled: false,
    isSecondOpen: false,
  };

  })
