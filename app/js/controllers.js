'use strict'; 

var signApp = angular.module('signApp', []);

signApp.controller('SignCtrl', function($scope, $http){
	$http.get('signs/signs.json').success(function(data){
    $scope.signs = data;
   });

    $scope.rows = [];
    var maxRows = 8;
    var maxCols = 5;
    for(var i = 0; i < maxRows; i++){
      $scope.rows.push([]);
      for(var j=0; j< maxCols; j++){
        $scope.rows[i][j] = "Item in" + i + "," + j;
      }
    }
 
});