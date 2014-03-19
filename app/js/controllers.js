'use strict';

/* Controllers */

// angular.module('DapiApp.controllers', []).
//   controller('MyCtrl1', [function() {

//   }])
//   .controller('MyCtrl2', [function() {

//   }]);

angular.module('DapiApp.controllers', []).

controller('categoryController', function($scope, spmAPIservice) {

    $scope.categoryList = [];

    spmAPIservice.getCategories().success(function (response) {
        console.log(response);
        $scope.categoryList = response.body[0];
    });
});

// controller('driversController', function($scope, spmAPIservice) {
// //Dinamic API Source
//   $scope.nameFilter = null;
//   $scope.driversList = [];

// //Setup of the search field filter
//   $scope.searchFilter = function (driver) 
//   {
//     var keyword = new RegExp($scope.nameFilter, 'i');
//     return !$scope.nameFilter || keyword.test(driver.Driver.givenName) || keyword.test(driver.Driver.familyName) || keyword.test(driver.points) || keyword.test(driver.Driver.nationality) || keyword.test(driver.Constructors[0].name);
//   }
// //Setup of the search field filter


//   spmAPIservice.getDrivers().success(function (response) {
//     $scope.driversList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
//   });
  
// }).

//   /* Driver controller */
//   controller('driverController', function($scope, $routeParams, spmAPIservice) {
//     $scope.id = $routeParams.id;
//     $scope.races = [];
//     $scope.driver = null;

//     spmAPIservice.getDriverDetails($scope.id).success(function (response) {
//         $scope.driver = response.MRData.StandingsTable.StandingsLists[0].DriverStandings[0]; 
//     });

//     spmAPIservice.getDriverRaces($scope.id).success(function (response) {
//         $scope.races = response.MRData.RaceTable.Races; 
//     }); 



// //Static source
//     // $scope.driversList = [
//     //   {
//     //       Driver: {
//     //           givenName: 'Sebastian',
//     //           familyName: 'Vettel'
//     //       },
//     //       points: 322,
//     //       nationality: "German",
//     //       Constructors: [
//     //           {name: "Red Bull"}
//     //       ]
//     //   },
//     //   {
//     //       Driver: {
//     //       givenName: 'Fernando',
//     //           familyName: 'Alonso'
//     //       },
//     //       points: 207,
//     //       nationality: "Spanish",
//     //       Constructors: [
//     //           {name: "Ferrari"}
//     //       ]
//     //   }
//     // ];
// });