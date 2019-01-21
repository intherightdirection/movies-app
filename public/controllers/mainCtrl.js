angular.module('movieApp', ['ngRoute'])
.config(($routeProvider) => {
  //determines which html view will be displayed depending on address in address bar
  $routeProvider.when('/surprise/:playId', { templateUrl: '/views/movie-view.html' });
  $routeProvider.otherwise({ templateUrl: '/views/movie-info.html' });
})
  .controller('mainController', function($scope, $http) {
    $scope.data = {};

    $http.get(`info/movies.json`)
      .success(function(data) {
        $scope.data.products = data;
      })
      .error(function(error) {
        $scope.data.error = error;
      })
  })