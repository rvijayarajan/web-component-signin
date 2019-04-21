(function () {

 	var app = angular.module("main",['wcSignin']);

	app.component("app", {
		template: '<div class="container">'+
					 '<div class="row"> '+
						'<div class="col-12 col-md-4 offset-sm-4"> '+
							'<signin cookie-config="config"></signin>'+
						'</div>'+
					  '</div>'+
					'</div>',
		controllerAs: "cntl",
		bindings: {
			
		},
		controller: "AppController"
	});

	app.controller("AppController", AppControllerFn);

	AppControllerFn.$inject = ["$scope"];

	function AppControllerFn($scope) {
		var date = new Date();
		date = date.setMinutes(date.getMinutes()+2);
		$scope.config = {
			domain: 'localhost',
			expires: new Date(date)
		}
		
	}

})();
