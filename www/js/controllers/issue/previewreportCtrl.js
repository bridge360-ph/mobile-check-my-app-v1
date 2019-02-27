angular.module('cmsapp.previewreportCtrl', [])
.controller('previewreportCtrl', function($scope,$state, $stateParams,issueServices,$ionicLoading, $ionicPopup,$rootScope,$timeout) {
	$rootScope.prevTab=3;
	console.log($rootScope.feedback);
	if ($rootScope.feedback.feedback_text !='')
	{
		$scope.data = $rootScope.feedback.feedback_text;
		var date = new Date();
		// $scope.currentDate = date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2);
		$scope.currentDate= ('0' + date.getDate()).slice(-2) + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + date.getFullYear();
		// $scope.currentDate = new Date();
		$rootScope.text = $scope.data.split(',');
		console.log($rootScope.text);
		$rootScope.feedback.issueof = $rootScope.text[0];
		$rootScope.feedback.schoolin = $rootScope.text[1];
		$rootScope.feedback.existedfor = $rootScope.text[2];
		console.log($rootScope.text[3]);
		console.log($rootScope.text[4]);
		if (typeof $rootScope.text[3] !='undefined' ) {
			$rootScope.feedback.other_details = $rootScope.text[3];
		}else{
			$rootScope.feedback.other_details = "";
		}
		if (typeof $rootScope.text[4] != 'undefined') {
			$rootScope.feedback.sign = $rootScope.text[4];
		}else{
			$rootScope.feedback.sign = "";
		}
	}

	console.log(new Date());
	

	console.log($rootScope.previousLocation);
});
