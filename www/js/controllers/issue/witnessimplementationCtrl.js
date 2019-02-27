angular.module('cmsapp.witnessimplementationCtrl', [])
.controller('witnessimplementationCtrl', function($window,Constants,$scope,$state,$stateParams,issueServices,$ionicLoading, $ionicPopup,$rootScope,$timeout) {
		$rootScope.prevTab=4;
		$scope.temp ={
				'sof_service':'',
				'voi_service':''
			}
		if ($rootScope.resolve !=null) {
			if ($rootScope.resolve.source_of_fund_service !='') {
				$scope.temp ={
				'sof_service':$rootScope.resolve.source_of_fund_service
				}	
			}
			if ($rootScope.resolve.value_of_improved_service !='' && $rootScope.resolve.value_of_improved_service !=0) {
				$scope.temp.voi_service = parseInt($rootScope.resolve.value_of_improved_service);
				
			}
			
			if ($rootScope.resolve.photo_of_agreement !='') {
				$scope.uploaded_contract = 'ok';
				$scope.imageurl = Constants.PDF_IMAGE['resolve']+$rootScope.resolve.photo_of_agreement;
			}else{
				$scope.uploaded_contract = 'not';
			}
			if ($rootScope.resolve.photo_of_improved_service !='') {
				$scope.uploaded_service_photo = 'ok';
				$scope.imageurl2 = Constants.PDF_IMAGE['resolve']+$rootScope.resolve.photo_of_improved_service;
			}else{
				$scope.uploaded_service_photo = 'not';
			}
		}
	$scope.save = function() {
		$rootScope.loadingOn();
		var data ={
			user_id						: 	localStorage.getItem('user_id'),
			issue_id 					: 	localStorage.getItem('issue_id'),
			source_of_fund_service		:  	$scope.temp.sof_service,
			value_of_improved_service	: 	$scope.temp.voi_service,
			photo_of_agreement 			: 	($rootScope.cameraimage64 !=undefined) ? $rootScope.cameraimage64 :'',
			photo_of_improved_service 	: 	($rootScope.cameraimage642 !=undefined) ? $rootScope.cameraimage642 :''
		}
		
		console.log(data);
		issueServices.witness_implementation(data).then(function(response){
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