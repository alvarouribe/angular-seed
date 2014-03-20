'use strict';

/* Controllers */

// angular.module('DapiApp.controllers', []).
//   controller('MyCtrl1', [function() {

//   }])
//   .controller('MyCtrl2', [function() {

//   }]);

angular.module('DapiApp.controllers', []).

controller('notfoundController', function($scope) {
    $scope.message = "Sorry we didn't found this page!";
}).

controller('categoryController', function($scope) {
//controller('categoryController', function($scope, spmAPIservice) {

    $scope.categoryList = 
    [{
            id:"7445",
            code:"AE",
            name:"Albert-Eden",
            level:"2",
            parent_id:"3514"
        },
        {
            id:"9328",
            code:"ATP-TS-056",
            name:"Kumeu \/Huapai Train Station",
            level:"3",
            parent_id:"3375"
        },
        {
            id:"9306",
            code:"CLOSED",
            name:"Closed Toilets",
            level:"3",
            parent_id:"9305"
        },
        {
            id:"9477",
            code:"DEL",
            name:"Ash Street",
            level:"3",
            parent_id:"9189"
        },
        {
            id:"9478",
            code:"DEL",
            name:"Avondale Central Reserve",
            level:"3",
            parent_id:"9189"
    }];

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