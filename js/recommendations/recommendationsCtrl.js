angular.module('oracApp').controller('recommendationsCtrl', function($scope, service){

  $scope.getFoods = function(){
    service.getFoods().then(function(response){
        $scope.foods = response;
        console.log($scope.foods);
    });

  };

  $scope.getFoods();

});
