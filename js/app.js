angular.module('oracApp', ['ui.router'])

.config(function($urlRouterProvider, $stateProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('home', {
    templateUrl: './templates/home.html',
    url :'/'
  });
});
