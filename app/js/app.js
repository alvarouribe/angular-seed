'use strict';

// Declare app level module which depends on filters, and services
angular.module('F1FeederApp', [
  'ngRoute', //manage routes
  'F1FeederApp.filters',
  'F1FeederApp.services', //manages services like an API source...
  'F1FeederApp.directives',
  'F1FeederApp.controllers' // Manages the controllers 
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  	
  	when('/drivers' , {
  		templateUrl: 'partials/drivers.html', 
  		controller: 'driversController'}).
  	
  	when('/drivers/:id' , {
  		templateUrl: 'partials/driver.html', 
  		controller: 'driverController'}).

  	otherwise({redirectTo: '/drivers'});
}]);
