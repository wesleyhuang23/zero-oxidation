angular.module("oracApp",["ui.router"]).config(function(t,e){t.otherwise("/"),e.state("home",{templateUrl:"./templates/home.html",url:"/"}).state("oxidation",{templateUrl:"./templates/oxidation.html",url:"/oxidation"}).state("contact",{templateUrl:"./templates/contact.html",url:"/contact"})});