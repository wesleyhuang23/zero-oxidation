angular.module('oracApp').controller('contactCtrl', function($scope, service){

  var msgData = [];

  $scope.storeMsg = function(fn, ln, email, msg){
    var msgObj = {};
    msgObj.firstName = fn;
    msgObj.lastName = ln;
    msgObj.email = email;
    msgObj.message = msg;
    console.log(msgObj);
    msgData.push(msgObj);
    console.log(msgData);
  };

});
