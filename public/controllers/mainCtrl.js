angular.module('movieApp', ['ngRoute'])
.config(($routeProvider) => {
  //determines which html view will be displayed depending on address in address bar
  $routeProvider.when('/surprise/:playId', { templateUrl: '/views/movie-view.html' });
  $routeProvider.otherwise({ templateUrl: '/views/movie-info.html' });
})
  .constant('dataUrl', 'http://localhost:3000/movies.json') //sets constant dataUrl
  .controller('mainController', function($scope, $http, dataUrl) {
    $scope.data = {};

    $http.get(dataUrl)
      .success(function(data) {
        $scope.data.products = data;
      })
      .error(function(error) {
        $scope.data.error = error;
      })
  })