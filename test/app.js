var app = angular.module('facultyApp',['ngRoute']);

app.config(function($routeProvider){
	$routeProvider.
	when('/',{templateUrl:'list.php'}).
	otherwise({redirectTo:'/'});
});

app.controller('AppCtrl',function($scope) {
	$scope.faculty = {firstname:"Hrishikesh"};
});