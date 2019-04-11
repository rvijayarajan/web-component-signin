(function () {

 	var app = angular.module("wcSignin",[]);

	app.component("signin", {
		templateUrl: "signin.html",
		controllerAs: "cntl",
		bindings: {

		},
		controller: "SigninController"
	});

	app.controller("SigninController", SigninControllerFn);

	SigninControllerFn.$inject = ["$scope"];

	function SigninControllerFn($scope) {
	}

})();
