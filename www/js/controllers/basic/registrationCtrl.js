angular.module('cmsapp.registrationCtrl', [])

.controller('registrationCtrl', function($timeout,$scope,$state, $ionicModal,
									 $timeout,$ionicLoading,$localStorage,
									 Constants,Registration,$rootScope,$ionicPopup) {

	$scope.data = {
			'name'			: '',
			'contact_number': '',
			'email_address'	: '',
			'password'		: '',
			'group_code'	: ''
		}
	$scope.registration=function(signupForm){
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

	    	$rootScope.email_address = $scope.data.mail;
		var tmp = {
			name			: $scope.data.name,
			contact_number  : $scope.data.contact_number,
			email_address	: $scope.data.mail,
			password		: $scope.data.pwd,
			group_code		: $scope.data.group_code
		};
		Registration.RegisterUser(tmp).then(function(response){	
			console.log(response.verification_code);
			 localStorage.setItem('user_id',response.user_id); 
			 $ionicLoading.hide();

			 if (response.success == "true") 
			 {
			 	$state.go('verifycode');
			 }
			 else
			 {
			 	console.log("asd");
			 		
     				var alertPopup = $ionicPopup.alert({
       				
       				template: 'Email address is already in use'
     				});
     				alertPopup.then(function(res) {
       					console.log('Thank you for not eating my delicious ice cream cone');
     				});
   				
			 }
		});
	}

	}
	  
})

