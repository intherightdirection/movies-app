import { rejects } from "assert";

angular.module('movieApp')
.controller('movieInfo', function($scope,$http) {
  
  $scope.id = '';
  $scope.playId = '';
  $scope.info = {};


  $scope.getInfo = (id) => {
    $scope.id = id;
    $http.get(`info/movie_id${id}`)
    .success(function(data) {
      $scope.info = data;
    })
    .error(function(error) {
      $scope.error = error;
    })
    return $scope; 
  }
  
  $scope.closeInfo = () => {
    $scope.id = 0;
  }
})