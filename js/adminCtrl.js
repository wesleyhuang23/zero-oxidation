angular.module('oracApp').controller('adminCtrl', function($scope, service){

  $scope.getMessage = function(){
    $scope.messages = service.getMessage();
    console.log($scope.message);
  };

  $scope.getMessage();

});
