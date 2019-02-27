angular.module('cmsapp.identifyconcernedCtrl', [])
.directive('onlyDigits', function () {
    return {
      require: 'ngModel',
      restrict: 'A',
      link: function (scope, element, attr, ctrl) {
        function inputValue(val) {
          if (val) {
            var digits = val.replace(/[^0-9]/g, '');

            if (digits !== val) {
              ctrl.$setViewValue(digits);
              ctrl.$render();
            }
            return parseInt(digits,10);
          }
          return undefined;
        }            
        ctrl.$parsers.push(inputValue);
      }
    };
})
.controller('identifyconcernedCtrl', function($scope,$state,Constants, $window,$stateParams,issueServices,$ionicLoading, $ionicPopup,$rootScope,$timeout,$cordovaSocialSharing) {
	$rootScope.prevTab=1;
	$rootScope.cameraimage64="";
	
	//console.log(message);
	var image  = "http://webservicesindia.co.in/cmsapp/logo/CMS_Minimal.jpg";
	//link  =  "The url of the app";
					 
						// $scope.buttonDisabled = localStorage.getItem('buttonDisabled');
						// console.log($scope.buttonDisabled )
		// $scope.engage1 = $rootScope.engage;
		// console.log($rootScope.engage);
		if ($rootScope.engage ==null) {
			
			$rootScope.engage ={
				no_of_parents 		:" ",
				no_of_students		:" ",
				no_of_teachers		:" ",
				no_of_members		:" ",
				no_of_faith_groups	:" ",
				no_of_business		:" ",
				no_of_others		:" ",
				no_of_ngo			:" "
			}
			$scope.uploaded_engagedform = 'not';
		}else{
			if ($rootScope.engage.signed_statment_form !='') {
				$scope.uploaded_engagedform = 'ok';
				$scope.imageurl = Constants.PDF_IMAGE['statement_forms']+$rootScope.engage.signed_statment_form
				console.log($scope.imageurl);
			}else{
				$scope.uploaded_engagedform = 'not';	
			}
		}
				console.log($scope.uploaded_engagedform);
	
	
  $scope.share = function()
  {
  	var message = $rootScope.issueData.title;
  	console.log(message);
  	 $cordovaSocialSharing
    .shareViaFacebook(message, image)
    .then(function(result) {
      // Success!
    }, function(err) {
      // An error occurred. Show a message to the user
    });
  }
	$scope.saveData = function(){
		console.log($rootScope.engage);
		$rootScope.engage.issue_id = localStorage.getItem('issue_id');
		$rootScope.loadingOn();
		issueServices.engagepeople_saved($rootScope.engage).then(function(response){
			console.log(response);
			$rootScope.loadingOff();
					var alertPopup = $ionicPopup.alert({
					           title: response.data.success == 'true' ? 'Success' : 'Fail',
					           template: response.data.message,
					           cssClass:"messagePopup"
					         });
						$timeout(function() {
						     	alertPopup.close(); //close the popup after 3 seconds for some reason
							}, 3000);
		});
		console.log($rootScope.cameraimage64);
		if ($rootScope.cameraimage64 !='') {
			console.log('inside');
			$timeout(function() {
			var data2 = {
				   			issue_id : localStorage.getItem('issue_id'),
							signed_statment_form : $rootScope.cameraimage64
				   		}
			 issueServices.upload_engagedform(data2).then(function(response){
				        	console.log(response);
				        	$rootScope.loadingOff();
				        	var alertPopup = $ionicPopup.alert({
					           title: response.data.success == 'true' ? 'Success' : 'Fail',
					           template: response.data.message,
					           cssClass:"messagePopup"
					         });
						$timeout(function() {
						     	alertPopup.close(); //close the popup after 3 seconds for some reason
							}, 3000);

				        });
				}, 3000);
			}
		}
	
})	