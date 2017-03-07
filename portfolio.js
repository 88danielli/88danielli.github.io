var app = angular.module('app', ['ngRoute', 'ngAnimate', 'ui.bootstrap']);
app.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: './partials/landingPage.html',
  })
  .when('/skills', {
      templateUrl: './partials/skills.html',
  })
  .when('/projects', {
      templateUrl: './partials/projects.html',
      controller: 'projectsController'
  })
  .when('/resume', {
      templateUrl: './partials/resume.html'
  })
  .when('/about_me', {
      templateUrl: './partials/about_me.html'
  })
  .otherwise('/')

})
