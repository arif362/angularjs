var myApp = angular.module("myApp", []);

myApp.controller('myController', function($scope) {
	$scope.fname = "Sakil";
	$scope.lname = "Ahmed";
	$scope.users = [
     {name: 'Arif', email: 'arif@syftet.com',},
     {name: 'pias', email: 'pias@syftet.com',},
     {name: 'asad', email: 'asad@syftet.com',},
	];
});