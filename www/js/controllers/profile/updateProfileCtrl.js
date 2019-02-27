angular.module('cmsapp.updateProfileCtrl', [])

.controller('updateProfileCtrl', function($scope,$state,$rootScope,
							 		$ionicModal,$timeout,$ionicLoading,
							 		$localStorage,Constants,$cordovaCamera,
							 		$ionicPopup,profileService,$timeout,$cordovaAppVersion) {

	// $scope.data = {
	// 		'name'			: '',
	// 		'contact_number': '',
	// 		'email_address'	: '',
	// 		'password'		: '',
	// 		'group_code'	: ''
	// 	}

	
	var dataTosend = {
		user_id : localStorage.getItem('user_id')
	}	
	profileService.getProfile(dataTosend).then(function(response){
		$scope.data = response.data.response;
		// $scope.copy = response.data.response;
		$scope.orig = angular.copy($scope.data);


	})
	$cordovaAppVersion.getVersionNumber().then(function (version) {
		$scope.appVersion = version;
		console.log($scope.appVersion);
	  });
	

		/********** Show Popup on Click of receipt image ***************/
   
  /*****************Cancel Popup************************/

  $scope.CancelPopup = function(){
  	$scope.$apply();
  }

  $scope.resetdata = function(){
  		$scope.data = angular.copy($scope.orig);
  };

  

  $rootScope.cameraimage64 ="";
	$scope.updateProfile=function(signupForm){
		$scope.submitted=true;
	 if(signupForm.$valid)
	    {
	    $ionicLoading.show({
          content: 'Loading',
          animation: 'fade-in',
          showBackdrop: true,
          maxWidth: 200,
          showDelay: 0
        });

		var tmp = {
			user_id			: localStorage.getItem('user_id'),
			name			: $scope.data.name,
			contact_number  : $scope.data.contact_number,
			email_address	: $scope.data.email_address,
			image 			: $rootScope.cameraimage64
		};

		console.log(tmp);
		profileService.updateProfile(tmp).then(function(response){	
			 $ionicLoading.hide();
			 var alertPopup = $ionicPopup.alert({
		           title: response.data.success == 'true' ? 'Success' : 'Fail',
		           template: response.data.message,
		           cssClass:"messagePopup"
		         });
			  $timeout(function() {
                alertPopup.close(); //close the popup after 3 seconds for some reason
            }, 2000);
			if (response.data.success == 'true') {
				alertPopup.then(function(res) {
			 		$state.go('app.viewprofile');
				});
			 }
		});
	}
	}
	  
})

