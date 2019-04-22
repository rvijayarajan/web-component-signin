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

	SigninControllerFn.$inject = ["$scope","$cookies","$element","$timeout"];

	function SigninControllerFn($scope, $cookies, $element, $timeout) {

		var vm = $scope.$ctrl;

		$scope.$watch('rememberUser', function(latest, oldest){
			if($scope.initialized) {
				if(latest && angular.isDefined(vm.cookieConfig)) {
					$cookies.put('rememberCookie',latest, vm.cookieConfig);
				} else {
					if($cookies.get('rememberCookie')) {
						$cookies.remove('rememberCookie',vm.cookieConfig);
					}
				}	
			}
		});

		vm.$onInit = function() {
			if($cookies.get('rememberCookie')) {
				$scope.rememberUser = true;
			}
			$timeout(function(){
				$scope.initialized = true;
			});
		};
	}

})();
