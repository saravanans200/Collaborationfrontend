var myApp=angular.module("MyApp",['ngRoute']);
myApp.config(function($routeProvider){
	alert("I am in Router Provider");
	
	$routeProvider
	.when("/login", {
		templateUrl : "c_user/Login.html"
	})
	.when("/register",{
		templateUrl : "c_user/Register.html"
	});
	
});