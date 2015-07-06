var app = angular.module('MyApp', ['ngRoute', 'ui.bootstrap']);
app.config(function($routeProvider) {
	$routeProvider.
		when('/home', {
			templateUrl: 'htmls/search.html',
			controller: 'Search as ctrl'
		})
		.when('/gifDetails/:gifId', {
			templateUrl: '',
			controller: ''
		})
		.otherwise({
			redirectTo: '/home'
		});
});