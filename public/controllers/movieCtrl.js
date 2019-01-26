angular.module('movieApp')
.constant('movieJSON', 'http://localhost:3000/info/moviePaths.json')
.controller('movieController', function($scope, $http, $routeParams, movieJSON) {
  $scope.data = {};
  $scope.movieId = $routeParams.playId;

  $http.get(movieJSON)
    .success(function(data) {
      $scope.data.movies = data;
    })
    .error(function(error) {
      $scope.data.error = error;
    })
})