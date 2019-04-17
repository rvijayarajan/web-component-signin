(function () {

 	var app = angular.module("wcSignin",['ngCookies']);

	app.component("signin", {
		templateUrl: "signin.html",
		bindings: {
			cookieConfig: '<'
		},
		controller: "SigninController"
	});

	app.controller("SigninController", SigninControllerFn);

	SigninControllerFn.$inject = ["$scope","$cookies","$element"];

	function SigninControllerFn($scope, $cookies, $element) {

		var vm = $scope.$ctrl;

		$scope.$watch('rememberUser', function(latest, oldest){
			if(latest && angular.isDefined(vm.cookieConfig)) {
				$cookies.put('rememberCookie',latest, vm.cookieConfig);
			} else {
				if($cookies.get('rememberCookie')) {
					$cookies.remove('rememberCookie',vm.cookieConfig);
				}
			}
		});

		vm.$onInit = function() {
			if($cookies.get('rememberCookie')) {
				$scope.rememberUser = true;
			}
		};
	}

})();
