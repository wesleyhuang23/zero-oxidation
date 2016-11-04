angular.module('oracApp').controller('contactCtrl', function($scope, service){


  $scope.storeMsg = function(fn, ln, email, msg){
    service.storeMsg(fn, ln, email, msg);
  };

});
