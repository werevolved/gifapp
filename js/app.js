var app = angular.module('MyApp', ['ngRoute', 'ui.bootstrap']);
app.config(function($routeProvider) {
	$routeProvider.
		when('/home', {
			templateUrl: 'htmls/search.html',
			controller: 'MySearch as ctrl',
			resolve:{
				app: function($q, $http) {
					var defer = $q.defer();
					$http.get('http://www.gifbase.com/js/tags.json').
				  	success(function(data, status, headers, config) {
				  	console.log(data);
				    defer.resolve(data);
 					 }).
					error(function(data, status, headers, config) {
					   console.log(data);
					   alert("there was a problem pulling tags out");
					});
					return defer.promise;
				}
			}
		})
		.when('/gifDetails/:gifId', {
			templateUrl: '',
			controller: ''
		})
		.otherwise({
			redirectTo: '/home'
		});
});