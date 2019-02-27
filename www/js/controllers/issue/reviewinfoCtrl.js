angular.module('cmsapp.reviewinfoCtrl', [])
.controller('reviewinfoCtrl', function($scope,$state, $stateParams,issueServices,$ionicLoading, $ionicPopup,$rootScope,$timeout) {	
	console.log($rootScope.issue_access);
	$rootScope.prevTab=2;
if ($rootScope.issue_access !=null) {
	if ($rootScope.issue_access.is_info_useful == 'Y') {
		$scope.useful = true;
		$scope.status1 = true;
	}else{
		$scope.useful = false;
		$scope.status1 = false;
	}

	if ($rootScope.issue_access.is_issue_mentioned =='Y') {
		$scope.mention = true;
		$scope.status2 = true;
	}else{
		$scope.mention = false;
		$scope.status2 = false;
	}

	if ($rootScope.issue_access.is_office_responsible_identified == 'Y') {
		$scope.office_res = true;
		$scope.status3 = true;
	}else{
		$scope.office_res = false;
		$scope.status3 = false;
	}
}else{
	$scope.useful = false;
	$scope.mention = false;
	$scope.office_res = false;
}
	$scope.save=function() {
		console.log($scope.status1);
		console.log($scope.status2);
		console.log($scope.status3);
		if ($scope.status1) {
			$scope.status11 = 'Y';
		}else{
			$scope.status11 = 'N';
		}
		if ($scope.status2) {
			$scope.status22 = 'Y';
		}else{
			$scope.status22 = 'N';
		}
		if ($scope.status3) {
			$scope.status33 = 'Y';
		}else{
			$scope.status33 = 'N';
		}
		var data = {
			issue_id							: localStorage.getItem('issue_id'),
			is_office_responsible_identified 	: $scope.status33,
			is_issue_mentioned					: $scope.status22,
			is_info_useful						: $scope.status11
		}	
		issueServices.save_accessinfo(data).then(function(response) {
				console.log(response);
				var alertPopup = $ionicPopup.alert({
                     title: response.data.success == 'true' ? 'Success' : 'Fail',
                     template: response.data.message,
                     cssClass:"messagePopup"
                   });

				 $timeout(function() {
	                  alertPopup.close(); //close the popup after 3 seconds for some reason
	              }, 3000);
				 
				if ($scope.status1) {
					$rootScope.issue_access.is_info_useful = 'Y';
				}else{
					$rootScope.issue_access.is_info_useful = 'N';
				}
				if ($scope.status2) {
					$rootScope.issue_access.is_issue_mentioned = 'Y';
				}else{
					$rootScope.issue_access.is_issue_mentioned = 'N';
				}
				if ($scope.status3) {
					$rootScope.issue_access.is_office_responsible_identified = 'Y';
				}else{
					$rootScope.issue_access.is_office_responsible_identified = 'N';
				}
           
			})
	}
		$scope.stateChanged1 = function(checkStatus){
			if (checkStatus) {
				$scope.status1 =true; 
			}else{
				$scope.status1 =false;
			}

		}
		$scope.stateChanged2 = function(checkStatus){
			if (checkStatus) {
				$scope.status2 =true;
			}else{
				$scope.status2 =false;
			}

		}
		$scope.stateChanged3 = function(checkStatus){
			if (checkStatus) {
				$scope.status3 =true;
			}else{
				$scope.status3 =false;
			}

		}
})
