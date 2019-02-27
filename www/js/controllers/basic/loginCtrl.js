angular.module('cmsapp.loginCtrl', [])

.controller('loginCtrl', function($timeout,$scope, $state,$ionicModal, $timeout,
								Constants,Login,$ionicLoading,$ionicPopup) {

	$scope.data = {
			'email_address'	: '',
			'password'		: ''
		}
	$scope.login=function(loginForm){
		$scope.submitted=true;
	 if(loginForm.$valid)
	    {
	    	$ionicLoading.show({
          content: 'Loading',
          animation: 'fade-in',
          showBackdrop: true,
          maxWidth: 200,
          showDelay: 0
        });
		
		var tmp = {
			email_address	: $scope.data.mail,
			password		: $scope.data.pwd,
			device_token : localStorage.getItem('device_token')
		};
		
		Login.LoginUser(tmp).then(function(response){	
			$ionicLoading.hide();
			if (response.success == 'true') {
				 
				localStorage.setItem('user_id',response.response.user_id);
				localStorage.setItem('group_id',response.response.group_id);
				localStorage.setItem('loggedin','true');
				$state.go('app.dashboard');
			}else{
			 	 var alertPopup = $ionicPopup.alert({
		           title: 'Error',
		           template: response.message,
		           cssClass:"messagePopup"
		         });
			  $timeout(function() {
                    alertPopup.close(); //close the popup after 3 seconds for some reason
                }, 2000);
			 }
		});
	}
	}
	  
})

