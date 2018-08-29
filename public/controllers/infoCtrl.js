angular.module('movieApp')
.controller('movieInfo', function($scope) {
  
  $scope.id = '';
  $scope.playId = '';
  
  $scope.getInfo = function(id) {
    $scope.id = id;
    console.log(id);
    return $scope.id;
  }

  $scope.closeInfo = () => {
    $scope.id = 0;
  }
})