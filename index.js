(function () {

 	var app = angular.module("wcSignin",['ngCookies']);

	app.component("signin", {
		templateUrl: "signin.html",
		bindings: {
			cookieConfig: '<',
			onSubmit: '&'
		},
		controller: "SigninController"
	});

	app.controller("SigninController", SigninControllerFn);

	SigninControllerFn.$inject = ["$scope","$cookies","$element","$timeout"];

	function SigninControllerFn($scope, $cookies, $element, $timeout) {

		var vm = $scope.$ctrl;

		vm.$onInit = function() {
			var rememberObj = $cookies.getObject('rememberCookie'); 
			if(rememberObj) {
				vm.rememberUser = true;
				vm.email = rememberObj.username;
				vm.password = rememberObj.password;
			}
		};

		vm.submit = function() {
			vm.onSubmit({
				username: vm.email,
				password: vm.password
			});
		};

		vm.updateRememberPref = function() {
			var rememberUser = vm.rememberUser;
			if(rememberUser && angular.isDefined(vm.cookieConfig)) {
				var rememberObj = {
					username: vm.email,
					password: vm.password
				};
				$cookies.putObject('rememberCookie',rememberObj, vm.cookieConfig);
			} else {
				if($cookies.getObject('rememberCookie')) {
					$cookies.remove('rememberCookie',vm.cookieConfig);
				}
			}	
		};
	}

})();
