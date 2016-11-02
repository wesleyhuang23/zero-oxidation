angular.module('oracApp', ['ui.router'])

.config(function($urlRouterProvider, $stateProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('home', {
    templateUrl: './templates/home.html',
    url :'/'
  }).state('oxidation',{
    templateUrl:'./templates/oxidation.html',
    url: '/oxidation'
  }).state('contact', {
    templateUrl:'./templates/contact.html',
    url: '/contact'
  });
});
