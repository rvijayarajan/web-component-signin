angular.module('wcSigninTemplates', []).run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('signin.html',
    "<div class=\"card\">\r" +
    "\n" +
    "  <div class=\"card-body\">\r" +
    "\n" +
    "    <form>\r" +
    "\n" +
    "    	<div class=\"form-group row\">\r" +
    "\n" +
    "    		<label for=\"userEmail\" class=\"d-none col-md-4 d-md-block col-form-label\">Email</label>\r" +
    "\n" +
    "		    <div class=\"input-group mb-3 col-12 col-md-8\">\r" +
    "\n" +
    "			  <div class=\"input-group-prepend\">\r" +
    "\n" +
    "			    <i class=\"ion-md-mail input-group-text\"></i>\r" +
    "\n" +
    "			  </div>\r" +
    "\n" +
    "			  <input type=\"email\" class=\"form-control\" id=\"userEmail\" placeholder=\"Email\" ng-model=\"$ctrl.email\">\r" +
    "\n" +
    "			</div>\r" +
    "\n" +
    "    	</div>\r" +
    "\n" +
    "    	<div class=\"form-group row\">\r" +
    "\n" +
    "    		<label for=\"userPassword\" class=\"d-none col-md-4 d-md-block col-form-label\">Password</label>\r" +
    "\n" +
    "		    <div class=\"input-group mb-3 col-12 col-md-8\">\r" +
    "\n" +
    "			  <div class=\"input-group-prepend\">\r" +
    "\n" +
    "			    <i class=\"ion-md-lock input-group-text\"></i>\r" +
    "\n" +
    "			  </div>\r" +
    "\n" +
    "			  <input type=\"password\" class=\"form-control\" id=\"userPassword\" placeholder=\"Password\" ng-model=\"$ctrl.password\">\r" +
    "\n" +
    "			</div>\r" +
    "\n" +
    "    	</div>\r" +
    "\n" +
    "    	<div class=\"form-group row justify-content-md-center justify-content-start\">\r" +
    "\n" +
    "    		<div class=\"col-4\">\r" +
    "\n" +
    "		      <button type=\"submit\" class=\"btn btn-primary\" ng-click=\"$ctrl.submit()\">Sign in</button>\r" +
    "\n" +
    "		    </div>\r" +
    "\n" +
    "		    <div class=\"w-100\"></div>\r" +
    "\n" +
    "    		<div class=\"col-12 col-md-9 custom-control custom-checkbox text-center\">\r" +
    "\n" +
    "			  <input type=\"checkbox\" class=\"custom-control-input\" id=\"remember\" ng-model=\"$ctrl.rememberUser\" ng-change=\"$ctrl.updateRememberPref()\">\r" +
    "\n" +
    "			  <label class=\"custom-control-label\" for=\"remember\">Remember Me</label>\r" +
    "\n" +
    "			</div>\r" +
    "\n" +
    "	  	</div>\r" +
    "\n" +
    "    </form>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "</div>"
  );

}]);

(function () {

 	var app = angular.module("wcSignin",['wcSigninTemplates','ngCookies']);

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
