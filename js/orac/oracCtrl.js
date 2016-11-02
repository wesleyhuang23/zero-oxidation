angular.module('oracApp').controller('oracCtrl', function($scope, service){
  $scope.orac = service.oracData;
});
