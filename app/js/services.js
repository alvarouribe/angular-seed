'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
// angular.module('DapiApp.services', []).
//   value('version', '0.1');


angular.module('DapiApp.services', []).
  factory('spmAPIservice', function($http) {

    var spmAPI = {};

    spmAPI.getCategories = function() {
      return $http({
        method: 'JSONP', 
        url: 'http://web-services-nz.spmapplications.com/rest/1.0/lsobject/object/PROPERTY_CATEGORY/token/TRUSTED/user/AKLCSPM1/format/jsonp'
        // url: 'http://ergast.com/api/f1/2013/driverStandings.json?callback=JSON_CALLBACK'
      });
    }

    return spmAPI;
  });

  // factory('spmAPIservice', function($http) {

  //   var spmAPI = {};

  //   spmAPI.getDrivers = function() {
  //     return $http({
  //       method: 'JSONP', 
  //       url: 'http://ergast.com/api/f1/2013/driverStandings.json?callback=JSON_CALLBACK'
  //     });
  //   }

  //   spmAPI.getDriverDetails = function(id) {
  //     return $http({
  //       method: 'JSONP', 
  //       url: 'http://ergast.com/api/f1/2013/drivers/'+ id +'/driverStandings.json?callback=JSON_CALLBACK'
  //     });
  //   }

  //   spmAPI.getDriverRaces = function(id) {
  //     return $http({
  //       method: 'JSONP', 
  //       url: 'http://ergast.com/api/f1/2013/drivers/'+ id +'/results.json?callback=JSON_CALLBACK'
  //     });
  //   }

  //   return spmAPI;
  // });