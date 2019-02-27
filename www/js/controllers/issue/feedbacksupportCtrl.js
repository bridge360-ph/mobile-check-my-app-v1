angular.module('cmsapp.feedbacksupportCtrl', [])
.controller('feedbacksupportCtrl', function($scope,$state, $stateParams,issueServices,$ionicLoading, $ionicPopup,$rootScope,$timeout) {
	 $rootScope.prevTab=3;
	if ($rootScope.feedback !=null) {
		if ($rootScope.feedback.no_of_supports !='') {
			$scope.data={
				'support':$rootScope.feedback.no_of_supports
			}
		}else{
			$scope.data={
				'support':''
			}
		}
	}else{
		$scope.data={
			'support':''
		}
	}
	$scope.save=function(){
		console.log($scope.data.support);
		$rootScope.loadingOn();
		var dd ={
			issue_id 		:	localStorage.getItem('issue_id'),
			no_of_supports	: 	$scope.data.support
		}
		console.log(dd);

		issueServices.save_feedback(dd).then(function(response){
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
			
			})
		
	}
});