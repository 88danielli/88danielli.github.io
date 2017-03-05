var app = angular.module('app', ['ngRoute']);
app.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: './partials/landingPage.html',
  })
  .when('/skills', {
      templateUrl: './partials/skills.html',
  })
  ./when('/projects', {
      templateUrl: './partials/projects.html'
  })

})
