// import { rejects } from "assert";

angular.module('movieApp')
.controller('movieInfo', function($scope,$http) {
  
  $scope.id = '';
  $scope.playId = '';
  $scope.info = {};


  $scope.getInfo = (id) => {
    $scope.id = id;
    if (id) {
       $http.get(`info/movie_id${$scope.id}.json`)
        .success(function(data) {
          $scope.info = data;
        })
        .error(function(error) {
          $scope.error = error;
        })

    } 
  return $scope;     
  } 
    
  $scope.closeInfo = () => {
    $scope.id = '';
  }
})