'use strict';

// Declare app level module which depends on filters, and services
angular.module('DapiApp', [
  'ngRoute', //manage routes
  'DapiApp.filters',
  'DapiApp.services', //manages services like an API source...
  'DapiApp.directives',
  'DapiApp.controllers' // Manages the controllers 
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  	
  	when('/cat' , { templateUrl: 'partials/categories.html', controller: 'categoryController'}).
    when('/notfound' , { templateUrl: 'partials/notfound.html', controller: 'notfoundController'}).

  	otherwise({redirectTo: '/notfound'});
}]);
