angular.module('cmsapp.sendreportCtrl', [])
.controller('sendreportCtrl', function($scope,$state, $stateParams,issueServices,$ionicLoading, $ionicPopup,$rootScope,$timeout) {

	$rootScope.prevTab=3;
	$scope.abc ={
			'other':""
		}
	if ($rootScope.feedback !=null) {
		$scope.choice=$rootScope.feedback.report_sent_by;
		if ($scope.choice !='') {
			if ($scope.choice != 'Hand-carry' && $scope.choice !='Email') {
				$scope.abc ={
					'other':$scope.choice
				}
				$scope.choice='Other means';
			}else{
				$scope.abc ={
					'other':""
				}
			}
		}
	}else{
		$scope.choice;
		$scope.abc ={
			'other':""
		}
	}

	
	if ($scope.choice =='Other means') {
		$(".hideshow").show();
	}else{
		$(".hideshow").hide();
	}

	$scope.stateChanged1= function(){
					$(".hideshow").hide();
	}
	$scope.stateChanged = function(){
				$(".hideshow").show();
		}
	$scope.save = function(choice)
	{

		$rootScope.loadingOn();
		if ($scope.abc.other !='') 
		{		
			var data =$scope.abc.other;
		}
		else
		{
			var data = choice;
		}

		var dataTosend={
			issue_id 		:	localStorage.getItem('issue_id'),
			report_sent_by	: 	data
		}
		console.log(dataTosend);
			issueServices.save_feedback(dataTosend).then(function(response){
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