'use strict';

/* Controllers */

// angular.module('F1FeederApp.controllers', []).
//   controller('MyCtrl1', [function() {

//   }])
//   .controller('MyCtrl2', [function() {

//   }]);

angular.module('F1FeederApp.controllers', []).
controller('driversController', function($scope, ergastAPIservice) {
//Dinamic API Source
  $scope.nameFilter = null;
  $scope.driversList = [];

//Setup of the search field filter
  $scope.searchFilter = function (driver) 
  {
    var keyword = new RegExp($scope.nameFilter, 'i');
    return !$scope.nameFilter || keyword.test(driver.Driver.givenName) || keyword.test(driver.Driver.familyName) || keyword.test(driver.points) || keyword.test(driver.Driver.nationality) || keyword.test(driver.Constructors[0].name);
  }
//Setup of the search field filter


  ergastAPIservice.getDrivers().success(function (response) {
    $scope.driversList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
  });


//Static source
    // $scope.driversList = [
    //   {
    //       Driver: {
    //           givenName: 'Sebastian',
    //           familyName: 'Vettel'
    //       },
    //       points: 322,
    //       nationality: "German",
    //       Constructors: [
    //           {name: "Red Bull"}
    //       ]
    //   },
    //   {
    //       Driver: {
    //       givenName: 'Fernando',
    //           familyName: 'Alonso'
    //       },
    //       points: 207,
    //       nationality: "Spanish",
    //       Constructors: [
    //           {name: "Ferrari"}
    //       ]
    //   }
    // ];
});