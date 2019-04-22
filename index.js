(function () {

 	var app = angular.module("wcSignin",['ngCookies']);

	app.directive("signin", function() {
		return {
			restrict: 'EA',
			templateUrl: "signin.html",
			scope: {
				cookieConfig: '='
			},
			controller: "SigninController"	
		};
	});

	app.controller("SigninController", SigninControllerFn);

	SigninControllerFn.$inject = ["$scope","$cookieStore","$element"];

	function SigninControllerFn($scope, $cookies, $element) {

		var vm = this;

		$scope.$watch('rememberUser', function(latest, oldest, scope){
			if(latest) {
				$cookies.put('rememberCookie',latest);
			} else {
				if($cookies.get('rememberCookie')) {
					$cookies.remove('rememberCookie');
				}
			}
		});

		$scope.$watch('cookieConfig', function(latest, oldest, scope){
			console.log(scope);
		});

			if($cookies.get('rememberCookie')) {
				$scope.rememberUser = true;
			}
	}

})();
