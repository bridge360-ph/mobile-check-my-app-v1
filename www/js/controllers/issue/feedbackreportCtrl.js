angular.module('cmsapp.feedbackreportCtrl', [])
.controller('feedbackreportCtrl', function($scope,$state, $stateParams,issueServices,$ionicLoading, $ionicPopup,$rootScope,$timeout) {
	// $scope.feedback={
	// 	"issueof":"",
	// 	"schoolin":"",
	// 	"existedfor":"",
	// 	"other_details":"",
	// 	"sign":""
	// }
	$rootScope.prevTab=3;
	if ($rootScope.feedback == null) {
		// if ($rootScope.feedback.issueof =='') {

		// }
		$rootScope.feedback = {
			other_details 	: '',
			sign			: ''
		}
	}
	$scope.preview = function(addIssueForm) {
		$scope.submitted=true;
		if (addIssueForm.$valid) {
			if(typeof $scope.feedback.issueof=== "undefined")
				$scope.feedback.issueof="";
			if(typeof $scope.feedback.schoolin=== "undefined")
				$scope.feedback.schoolin="";
			if(typeof $scope.feedback.existedfor=== "undefined")
				$scope.feedback.existedfor="";
			if(typeof $scope.feedback.other_details=== "undefined")
				$scope.feedback.other_details="";
			if(typeof $scope.feedback.sign=== "undefined")
				$scope.feedback.sign="";
			if ($scope.feedback.other_details !='') {
				var data = $scope.feedback.issueof+"," + $scope.feedback.schoolin+"," + $scope.feedback.existedfor+"," + $scope.feedback.other_details;
			}else{
				var data = $scope.feedback.issueof+"," + $scope.feedback.schoolin+"," + $scope.feedback.existedfor;
			}

			if ($scope.feedback.sign !='') {
				data += ','+ $scope.feedback.sign;
			}
			$rootScope.feedback.feedback_text =  data;
			$state.go('app.previewfeedbackreport');
		}
	}
	$scope.save = function(addIssueForm){
		$scope.submitted=true;
		
		
		if (addIssueForm.$valid) {
			if ($scope.feedback.other_details !='') 
			{

				var data =  $scope.feedback.issueof+"," + $scope.feedback.schoolin+"," + $scope.feedback.existedfor+"," + $scope.feedback.other_details;
			}
			else
			{
				var data = $scope.feedback.issueof+"," + $scope.feedback.schoolin+"," + $scope.feedback.existedfor;
			}

			if ($scope.feedback.sign !='') {
				data += ','+ $scope.feedback.sign;
			}
				$rootScope.previewdata = data;
				console.log(data);
				var datamain ={
					issue_id 		:	localStorage.getItem('issue_id'),
					feedback_text 	: 	data
				}
				$rootScope.loadingOn();
				issueServices.save_feedback(datamain).then(function(response){
					console.log(response);
					$rootScope.loadingOff();
					if (response.data.success = 'true') {
	                var alertPopup = $ionicPopup.alert({
	                   title: 'success',
	                   template: response.data.message,
	                   cssClass:"messagePopup"
	                 });
	                 $timeout(function() {
	                    alertPopup.close(); //close the popup after 3 seconds for some reason
	                }, 2000);
	               }
	               
				})
		}
		
	}

});