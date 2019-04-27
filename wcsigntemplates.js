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
