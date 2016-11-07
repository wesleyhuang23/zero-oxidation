angular.module('oracApp', ['ui.router'])

.config(function($urlRouterProvider, $stateProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('home', {

    templateUrl: './templates/home.html',
    url :'/'
  }).state('oxidation',{

    templateUrl:'./templates/oxidation.html',
    url: '/oxidation'
  }).state('anti-oxidants',{

    templateUrl: './templates/anti-oxidants.html',
    url:'/anti-oxidants',
    controller: 'oracCtrl'

  }).state('recommendations', {
    templateUrl: './templates/recommendations.html',
    url: '/recommendations',
    controller: 'recommendationsCtrl'
  }).state('contact', {
    templateUrl:'./templates/contact.html',
    url: '/contact',
    controller: 'contactCtrl'
  }).state('admin', {
    templateUrl:'./templates/admin.html',
    url: '/admin',
    controller:'adminCtrl'
  });
});
