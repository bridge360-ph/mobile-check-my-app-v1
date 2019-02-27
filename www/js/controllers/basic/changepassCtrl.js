angular.module('cmsapp.changepassCtrl', [])

.controller('changepassCtrl', function($timeout,$scope, $state,$ionicModal, $timeout,
								Constants,$rootScope,ResetPasswordService,$ionicLoading,$ionicPopup) {

	$scope.data = {
		'vcode' : '',
		'pwd'	:''
	}
	$scope.resetPwd =function(form){
		$scope.submitted=true;
		console.log(form.$valid);
			 if(form.$valid)
			    {
			    	$rootScope.loadingOn();
				
				var tmp = {
					verifaction_code	: $scope.data.vcode,
					new_password: $scope.data.pwd
				};
				console.log(tmp);
				ResetPasswordService.resetpassword_data(tmp).then(function(response){	
					$rootScope.loadingOff();
					var alertPopup = $ionicPopup.alert({
			           title: response.success == 'true' ? 'Success' : 'Fail',
			           template: response.message,
			           cssClass:"messagePopup"
			         });
					$timeout(function() {
				     	alertPopup.close(); //close the popup after 3 seconds for some reason
					}, 2000);

				if (response.success == 'true') {
					alertPopup.then(function(res) {
				 		$state.go('login');
					});
				 }
				});
			}

	}
});