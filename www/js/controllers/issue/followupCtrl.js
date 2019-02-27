angular.module('cmsapp.followupCtrl', [])
.controller('followupCtrl', function($scope,$state,$stateParams,issueServices,$ionicLoading, $ionicPopup,$rootScope,$timeout) {
	$rootScope.prevTab=4;
	$scope.data ={
		'feedback':($rootScope.resolve != null) ? $rootScope.resolve.followup_text : ''
	}
	// $scope.feedback = $rootScope.resolve.followup_text;
	
	$scope.save=function(){
		$rootScope.loadingOn();
		var data ={
			user_id					: localStorage.getItem('user_id'),
			issue_id 				: localStorage.getItem('issue_id'),
			followup_text 			:  $scope.data.feedback
		}
		issueServices.send_followup(data).then(function(response){
			console.log(response);
			$rootScope.loadingOff();
				var alertPopup = $ionicPopup.alert({
		           title: response.data.success == 'true' ? 'Success' : 'Fail',
		           template: response.data.message,
		           cssClass:"messagePopup"
		         });
				 $timeout(function() {
	                alertPopup.close(); //close the popup after 3 seconds for some reason
	            }, 2000);
			
		});
	}
});
